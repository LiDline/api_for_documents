import { z } from 'zod';

export const UpdateUserRequestSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  patrName: z.string(),
  sex: z.union([z.string(), z.number()]),
  id: z.number(),
});
