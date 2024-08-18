import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';
import { createZodDto } from 'nestjs-zod';
import { MiddlewareSchema } from './utils';

export function InputSingleDto(values: z.ZodType) {
  return z.object({
    body: values,
    role: RoleSchema,
    id: z.number(),
  });
}

export class MiddlewareDto extends createZodDto(MiddlewareSchema) {}

// export function InputDoubleDto(values: z.ZodType, additionalValues: z.ZodType) {
//   return z.object({
//     body: z.object({ values, additionalValues }),
//     authorization: z.string().min(1),
//   });
// }
