import { z } from 'zod';

export const ResponseSchema = z.object({
  message: z.enum(['Unauthorized', 'Internal server error']).optional(),
  statusCode: z.union([z.literal(401), z.literal(500)]).optional(),
});
