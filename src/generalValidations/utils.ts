import { z } from 'zod';

export const ResponseSchema = z.object({
  message: z.string().optional(),
  statusCode: z.number().optional(),
});

export const IdSchema = z.number();
