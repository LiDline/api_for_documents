import { USER_TYPE } from 'src/CONST';
import { z } from 'zod';

import { LoginResponseSchema, LoginSchema } from './validation/loginSchema';

export type UserType = keyof typeof USER_TYPE;
export type Role = (typeof USER_TYPE)[keyof typeof USER_TYPE];

export type ValidateUser = {
  username: string;
  role: Role;
};

export type Login = z.infer<typeof LoginSchema>;

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
