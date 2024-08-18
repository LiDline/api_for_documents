import { z } from 'zod';

export const ResponseSchema = z.object({
  message: z.string().optional(),
  statusCode: z.number().optional(),
});

export const IdSchema = z.number();

export const StringNullable = z.string().nullable();

export const NumberNullable = z.number().nullable();
