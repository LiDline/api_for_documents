import { createZodDto } from 'nestjs-zod';
import { LoginSchema } from './validation/loginSchema';

export class LoginDto extends createZodDto(LoginSchema) {}
