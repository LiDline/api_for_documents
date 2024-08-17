import { z } from 'zod';

import {
  CreateUsersRequestSchema,
  DataInJSONForNewUserSchema,
  DocumentSchema,
  InJSONForNewUserSchema,
  UserSchema,
} from './validation/createUsersSchema';
import { NumberData, StringData } from 'src/bd/interfaces.db';
import { DOCUMENTS, GENDER } from './users.const';

export type UserInJSON = z.infer<typeof UserSchema>;

export type DataInJSONForNewUser = z.infer<typeof DataInJSONForNewUserSchema>;

export type JSONForNewUserSchema = z.infer<typeof InJSONForNewUserSchema>;

export type CreateUsersRequest = z.infer<typeof CreateUsersRequestSchema>;

export interface CreateOneUser {
  lastName: StringData;
  firstName: StringData;
  patrName: StringData;
  sex: string;
  id: number;
}

export type GenderNumber = keyof typeof GENDER;

export type DocumentsNumber = keyof typeof DOCUMENTS;
type DocumentsType = (typeof DOCUMENTS)[keyof typeof DOCUMENTS];

export type InitDataForDocument = {
  referralId: string;
  referralDate: string;
  senderName: string;
};

export type Document = z.infer<typeof DocumentSchema>;

interface InitCreatedDocuments {
  id: number;
  type: DocumentsType;
}

export interface CreatedDocuments extends InitCreatedDocuments {
  data: string;
}

export interface CreateNewUsers {
  user: CreateOneUser;
  documents: CreatedDocuments[];
}

export interface DataForDocumentsTable extends InitDataForDocument {
  name: StringData;
  series: StringData | NumberData;
  number: StringData;
  beginDate: StringData;
  endDate: StringData;
  issuedName: StringData;
}

export interface ExtractDocumentsFromUser extends InitCreatedDocuments {
  data: DataForDocumentsTable;
}
