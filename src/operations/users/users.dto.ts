import { createZodDto } from 'nestjs-zod';

import { InputSingleDto } from 'src/generalValidations/InputDto';
import { CreateUsersRequestSchema } from './validation/createUsersSchema';
import { GetAllUsersRequestSchema } from './validation/aboutMeSchema';
import { UpdateUserRequestSchema } from './validation/updateUserSchema';

export class CreateUsersDto extends createZodDto(
  InputSingleDto(CreateUsersRequestSchema),
) {}

export class GetAllUsersDto extends createZodDto(
  InputSingleDto(GetAllUsersRequestSchema),
) {}

export class UpdateUserDto extends createZodDto(
  InputSingleDto(UpdateUserRequestSchema),
) {}
