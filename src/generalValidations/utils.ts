import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';

export const ResponseSchema = z.object({
  message: z.string().optional(),
  statusCode: z.number().optional(),
});

export const IdSchema = z.number();

export const MiddlewareSchema = z.object({
  role: RoleSchema,
  id: z.number(),
});
