import { createZodDto } from 'nestjs-zod';

import { InputSingleDto } from 'src/generalValidations/InputDto';
import { CreateUsersRequestSchema } from './validation/createUsersSchema';
import { AboutMeSchema } from './validation/aboutMeSchema';

export class CreateUsersDto extends createZodDto(
  InputSingleDto(CreateUsersRequestSchema),
) {}

export class AboutMeDto extends createZodDto(AboutMeSchema) {}
