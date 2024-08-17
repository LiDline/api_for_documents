import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';

export function InputSingleDto(values: z.ZodType) {
  return z.object({
    body: z.object({ values }),
    role: RoleSchema,
  });
}

// export function InputDoubleDto(values: z.ZodType, additionalValues: z.ZodType) {
//   return z.object({
//     body: z.object({ values, additionalValues }),
//     authorization: z.string().min(1),
//   });
// }
