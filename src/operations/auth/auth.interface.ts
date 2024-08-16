import { USER_TYPE } from 'src/CONST';
import { z } from 'zod';
import { LoginSchema } from './validation/loginSchema';

export type UserType = keyof typeof USER_TYPE;

export type ValidateUser = {
  username: string;
  role: (typeof USER_TYPE)[keyof typeof USER_TYPE];
};

export type Login = z.infer<typeof LoginSchema>;
