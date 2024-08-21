'use server';

import db from '@/lib/db';
import getSession from '@/lib/session';

export async function saveMessage(payload: string, chatRoomId: string) {
  const session = getSession();
  await db.message.create({
    data: {
      payload,
      chatRoomId,
      userId: (await session).id!,
    },
    select: { id: true },
  });
}
