import { prisma } from '@/lib/prisma';
export default async function UsersPage(){ const users = await prisma.user.findMany(); return (<div style={{padding:10}}><h2>Users</h2>{users.map(u=> <div key={u.id}>{u.email} - {u.role}</div>)}</div>); }
