import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(3),
  pass: z.string().min(3),
});
