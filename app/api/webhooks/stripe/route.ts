import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' });

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') || '';
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET || '');
  } catch (err) {
    console.error('webhook error', err);
    return NextResponse.json({ error: 'invalid signature' }, { status: 400 });
  }
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const customerId = typeof session.customer === 'string' ? session.customer : '';
      const tenant = await prisma.tenant.findFirst({ where: { stripeCustomerId: customerId } });
      if (tenant) await prisma.tenant.update({ where: { id: tenant.id }, data: { billingStatus: 'ACTIVE' } });
      break;
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object;
      const tenant = await prisma.tenant.findFirst({ where: { stripeCustomerId: invoice.customer as string } });
      if (tenant) await prisma.tenant.update({ where: { id: tenant.id }, data: { billingStatus: 'PAST_DUE' } });
      break;
    }
    default:
      break;
  }
  return NextResponse.json({ received: true });
}
