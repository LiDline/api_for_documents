import { NumberNullable, StringNullable } from 'src/generalValidations/utils';
import { z } from 'zod';

const SenderSchema = z.object({
  Organization: z.object({
    oid: z.string(),
    fullName: z.string(),
  }),
});

export const DocumentSchema = z.object({
  id: z.string(),
  documentType_id: z.union([z.string(), z.number()]),
  documentType_Name: z.string(),
  series: z.union([z.string(), z.number()]),
  number: z.string(),
  beginDate: z.string(),
  endDate: StringNullable,
  orgDep_Name: z.string(),
  lpu_id: z.string(),

  name: StringNullable.optional(),
  formType_id: StringNullable.optional(),
  smo_id: StringNullable.optional(),
  type: StringNullable.optional(),
  documentDeputy_begDate: StringNullable.optional(),
  documentDeputy_Issue: StringNullable.optional(),
  documentDeputy_Ser: StringNullable.optional(),
  documentDeputy_Num: StringNullable.optional(),
  sprTerr_id: StringNullable.optional(),
  isTwoNation: z.boolean().nullable().optional(),
  personEvn_begDT: StringNullable.optional(),
  orgDep_id: StringNullable.optional(),
});

const AddressSchema = z.object({
  id: z.string(),
  value: z.string(),
  org_id: StringNullable,
  post_id: StringNullable,
  guid: z.string(),
});

const CredentialsSchema = z.object({
  username: z.string(),
  pass: z.string(),
});

export const UserSchema = z.object({
  id: z.number(),
  lastName: z.string(),
  firstName: z.string(),
  patrName: StringNullable,
  birthDate: z.string(),
  sex: z.union([z.string(), z.number()]),
  phoneNumber: z.string(),
  snils: StringNullable,
  inn: StringNullable,
  socStatus_id: StringNullable,
  socStatusFed_Code: StringNullable,
  pid: StringNullable,
  parPersonSurName_SurName: StringNullable,
  parPersonFirName_FirName: StringNullable,
  parPersonSecName_SecName: StringNullable,
  deputyKind_id: StringNullable,
  deputyOrg_id: StringNullable,
  documentAuthority_id: StringNullable,
  employment_id: StringNullable,
  familyStatus_id: StringNullable,
  personFamilyStatus_IsMarried: z.boolean().nullable(),
  legalStatusVZN_id: StringNullable,
  legalStatusVZN_Name: StringNullable,
  legalStatusVZN_pid: StringNullable,
  legalStatusVZN_pName: StringNullable,
  Credentials: CredentialsSchema,
  Address: AddressSchema.nullable(),
  Documents: z.array(DocumentSchema),
});

export const DataInJSONForNewUserSchema = z.object({
  Sender: SenderSchema,
  Users: z.array(UserSchema),
});

export const InJSONForNewUserSchema = z.object({
  id: z.number(),
  referralGUID: z.string(),
  referralDate: z.string(),
  Data: z.array(DataInJSONForNewUserSchema).min(1),
});

export const CreateUsersRequestSchema = z.array(InJSONForNewUserSchema).min(1);

//--------------------------------------------------------------------------------

export const DataForDocumentsTableResponseSchema = z.object({
  referralId: z.string(),
  referralDate: z.string(),
  senderName: z.string(),
  name: StringNullable,
  series: NumberNullable.or(StringNullable),
  number: StringNullable,
  beginDate: StringNullable,
  endDate: StringNullable,
  issuedName: StringNullable,
});
