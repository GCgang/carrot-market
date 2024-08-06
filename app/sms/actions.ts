'use server';
import { z } from 'zod';
import validator from 'validator';

import { TOKEN_MIN_VALUE, TOKEN_MAX_VALUE } from '@/lib/constants';

const phoneSchema = {
  phone: z.string().trim().refine(validator.isMobilePhone),
};

const tokenSchema = {
  token: z.coerce.number().min(TOKEN_MIN_VALUE).max(TOKEN_MAX_VALUE),
};

export async function snsLogin(prevState: any, formData: FormData) {}
