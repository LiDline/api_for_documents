import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';

export const AboutMeSchema = z.object({
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
