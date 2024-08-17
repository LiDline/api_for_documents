import { ResponseSchema } from 'src/generalValidations/utils';
import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
});

export const LoginResponseSchema = ResponseSchema.extend({
  access_token: z.string(),
});
