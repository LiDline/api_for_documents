import { z } from 'zod';

export function InputSingleDto(values: z.ZodType) {
  return z.object({
    body: z.object({ values }),
    authorization: z.string(),
  });
}

export function InputDoubleDto(values: z.ZodType, additionalValues: z.ZodType) {
  return z.object({
    body: z.object({ values, additionalValues }),
    authorization: z.string().min(1),
  });
}
