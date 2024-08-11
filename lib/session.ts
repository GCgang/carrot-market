import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

interface ISessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<ISessionContent>(cookies(), {
    cookieName: 'carrot-market-cookie',
    password: process.env.COOKIE_PASSWORD!,
  });
}
