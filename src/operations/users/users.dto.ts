import { createZodDto } from 'nestjs-zod';

import { InputSingleDto } from 'src/generalValidations/InputDto';
import { CreateUsersRequestSchema } from './validation/createUsersSchrma';

export class CreateUsersDto extends createZodDto(
  InputSingleDto(CreateUsersRequestSchema),
) {}
