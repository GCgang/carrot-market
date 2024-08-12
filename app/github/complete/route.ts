import db from '@/lib/db';
import { loginUserSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import {
  getGithubAccessToken,
  getGithubUser,
  getGithubEmail,
} from '@/lib/githubOAuth';
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }
  const accessToken = await getGithubAccessToken(code);
  const { id, avatar_url, login } = await getGithubUser(accessToken);
  const email = await getGithubEmail(accessToken);

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
      email,
    },
    select: {
      id: true,
    },
  });
  await loginUserSession(newUser.id);
  return redirect('/profile');
}

// username 과 Github의 login(username) 이름 중복 해결 햐여험
