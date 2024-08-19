'use server';

import db from '@/lib/db';
import getSession from '@/lib/session';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string({
    required_error: 'title is required',
  }),
  description: z.string({
    required_error: 'description is required',
  }),
});

export async function addPost(prevState: any, formData: FormData) {
  const data = {
    title: formData.get('title'),
    description: formData.get('description'),
  };
  const result = postSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const post = await db.post.create({
        data: {
          title: result.data.title,
          description: result.data.description,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });
      redirect(`/life/${post.id}`);
    }
  }
}
