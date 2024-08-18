import { z } from 'zod';

import { RoleSchema } from 'src/operations/auth/validation/loginSchema';
import { createZodDto } from 'nestjs-zod';
import { MiddlewareSchema } from 'src/operations/users/validation/aboutMeSchema';

export function InputSingleDto(values: z.ZodType) {
  return z.object({
    body: values,
    role: RoleSchema,
    id: z.number(),
  });
}

export class MiddlewareDto extends createZodDto(MiddlewareSchema) {}
