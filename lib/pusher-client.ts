// lib/pusher-client.ts
import Pusher from 'pusher-js';

// Initialize Pusher client-side (browser)
export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  forceTLS: true,
});

// Optional: log connection status (helpful for debugging)
pusherClient.connection.bind('connected', () => {
  console.log('✅ Pusher connected successfully');
});

pusherClient.connection.bind('error', (err: any) => {
  console.error('❌ Pusher connection error:', err);
});

export default pusherClient;
