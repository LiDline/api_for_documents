import { z } from 'zod';

import { ResponseSchema } from 'src/generalValidations/utils';
import { USERS } from 'src/CONST';

export const LoginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
});

export const RoleSchema = z.enum(USERS);

export const CreateSimpleDataForUserSchema = z.object({
  gender: z.string(),
  role: RoleSchema,
  lastName: z.string(),
  firstName: z.string(),
  patrName: z.string(),
  id: z.number(),
});

export const LoginResponseSchema = ResponseSchema.extend({
  access_token: z.string(),
  user: CreateSimpleDataForUserSchema,
});
