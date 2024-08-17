import { z } from 'zod';

import {
  CreateSimpleDataForUserSchema,
  LoginResponseSchema,
  LoginSchema,
} from './validation/loginSchema';
import { USER_TYPE } from 'src/CONST';

export type UserTypeProps = keyof typeof USER_TYPE;
export type Role = (typeof USER_TYPE)[keyof typeof USER_TYPE];

export type ValidateUser = {
  username: string;
  role: Role;
};

export type Login = z.infer<typeof LoginSchema>;

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export type CreateSimpleDataForUser = z.infer<
  typeof CreateSimpleDataForUserSchema
>;
