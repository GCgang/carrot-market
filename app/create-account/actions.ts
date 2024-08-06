'use server';
import { z } from 'zod';

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: 'Username must be a string!',
        required_error: 'Where is my username?',
      })
      .min(3, 'Way too short!')
      .max(10, 'That is too long!')
      .trim()
      .toLowerCase()
      .transform((username) => `🥕${username}`)
      .refine(
        (username) => !username.includes('username'),
        'No username allowd!'
      ),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(4)
      .regex(
        passwordRegex,
        'Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-'
      ),
    confirmPassword: z.string().min(4),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Two passwords should be equal',
        path: ['confirmPassword'],
      });
    }
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
