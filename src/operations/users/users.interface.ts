import { z } from 'zod';

import {
  CreateUsersRequestSchema,
  DataInJSONForNewUserSchema,
  InJSONForNewUserSchema,
  UserSchema,
} from './validation/createUsersSchrma';

export type UserInJSON = z.infer<typeof UserSchema>;

export type DataInJSONForNewUser = z.infer<typeof DataInJSONForNewUserSchema>;

export type JSONForNewUserSchema = z.infer<typeof InJSONForNewUserSchema>;

export type CreateUsersRequest = z.infer<typeof CreateUsersRequestSchema>;
