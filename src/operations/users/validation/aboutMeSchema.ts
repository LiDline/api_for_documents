import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';
import { StringNullable } from 'src/generalValidations/utils';

export const MiddlewareSchema = z.object({
  role: RoleSchema,
  id: z.number(),
});

export const GetAllUsersRequestSchema = z.object({
  limit: z.number(),
  offset: z.number(),
});

export const FindUserByNameRequestSchema = GetAllUsersRequestSchema.extend({
  name: z.string().min(3),
});

export const ResponseOneUserSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  patrName: StringNullable,
  sex: z.union([z.string(), z.number()]),
  id: z.number(),
});
