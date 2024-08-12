import db from '@/lib/db';
import getSession, { loginUserSession } from '@/lib/session';
import { notFound, redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_PASSWORD!,
    code,
  }).toString();
  const accessTokenURL = `https://github.com/login/oauth/access_token?
  ${accessTokenParams}`;
  const accessTokenResponse = await fetch(accessTokenURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  });
  const { error, accessToken } = await accessTokenResponse.json();
  if (error) {
    return new Response(null, {
      status: 400,
    });
  }
  const userProfileReponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-cache', // NextJS에서 fetch request를 cache 하기 때문에 no-cache 설정
  });
  const { id, avatar_url, login } = await userProfileReponse.json();
  const user = await db.user.findUnique({
    where: {
      github_id: id + '',
    },
    select: {
      id: true,
    },
  });
  if (user) {
    await loginUserSession(user.id);
    return redirect('/profile');
  }
  const newUser = await db.user.create({
    data: {
      username: login,
      github_id: id + '',
      avatar: avatar_url,
    },
    select: {
      id: true,
    },
  });
  await loginUserSession(newUser.id);
  return redirect('/profile');
}
