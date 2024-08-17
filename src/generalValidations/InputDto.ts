import { z } from 'zod';

import { USERS } from 'src/CONST';

export function InputSingleDto(values: z.ZodType) {
  return z.object({
    body: z.object({ values }),
    role: z.enum(USERS),
  });
}

// export function InputDoubleDto(values: z.ZodType, additionalValues: z.ZodType) {
//   return z.object({
//     body: z.object({ values, additionalValues }),
//     authorization: z.string().min(1),
//   });
// }
