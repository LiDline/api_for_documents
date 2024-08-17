import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';

export const AboutMeSchema = z.object({
  role: RoleSchema,
  id: z.number(),
});
