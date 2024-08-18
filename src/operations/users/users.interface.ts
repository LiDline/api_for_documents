import { z } from 'zod';

import {
  CreateUsersRequestSchema,
  DataForDocumentsTableResponseSchema,
  DataInJSONForNewUserSchema,
  DocumentSchema,
  InJSONForNewUserSchema,
  UserSchema,
} from './validation/createUsersSchema';
import { DOCUMENTS, GENDER } from './users.const';
import {
  FindUserByNameRequestSchema,
  GetAllUsersRequestSchema,
  ResponseOneUserSchema,
} from './validation/aboutMeSchema';
import { CreateSimpleDataForUser } from '../auth/auth.interface';

export type UserInJSON = z.infer<typeof UserSchema>;

export type DataInJSONForNewUser = z.infer<typeof DataInJSONForNewUserSchema>;

export type JSONForNewUserSchema = z.infer<typeof InJSONForNewUserSchema>;

export type CreateUsersRequest = z.infer<typeof CreateUsersRequestSchema>;

export type ResponseOneUser = z.infer<typeof ResponseOneUserSchema>;

export type GenderNumber = keyof typeof GENDER;

export type DocumentsNumber = keyof typeof DOCUMENTS;

export type InitDataForDocument = {
  referralId: string;
  referralDate: string;
  senderName: string;
};

export type Document = z.infer<typeof DocumentSchema>;

interface InitCreatedDocuments {
  id: number;
  type: number;
}

export type DataForDocumentsTableResponse = z.infer<
  typeof DataForDocumentsTableResponseSchema
>;

export interface CreatedDocument extends InitCreatedDocuments {
  data: DataForDocumentsTableResponse;
  userId: number;
}

export interface CreateNewUsers {
  user: ResponseOneUser;
  documents: CreatedDocument[];
}

export interface ExtractDocumentsFromUser extends InitCreatedDocuments {
  data: DataForDocumentsTableResponse;
}

export interface AboutMe {
  user: CreateSimpleDataForUser;
  documents: ExtractDocumentsFromUser[] | undefined;
}

export type GetAllUsersRequest = z.infer<typeof GetAllUsersRequestSchema>;

export type FindUserByNameRequest = z.infer<typeof FindUserByNameRequestSchema>;

export type UpdateUserRequest = z.infer<typeof ResponseOneUserSchema>;
