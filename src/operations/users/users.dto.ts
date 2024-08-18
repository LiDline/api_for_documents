import { createZodDto } from 'nestjs-zod';

import { InputSingleDto } from 'src/generalValidations/InputDto';
import { CreateUsersRequestSchema } from './validation/createUsersSchema';
import {
  GetAllUsersRequestSchema,
  ResponseOneUserSchema,
} from './validation/aboutMeSchema';

export class CreateUsersDto extends createZodDto(
  InputSingleDto(CreateUsersRequestSchema),
) {}

export class GetAllUsersDto extends createZodDto(
  InputSingleDto(GetAllUsersRequestSchema),
) {}

export class UpdateUserDto extends createZodDto(
  InputSingleDto(ResponseOneUserSchema),
) {}
