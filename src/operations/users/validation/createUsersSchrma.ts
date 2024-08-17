import { z } from 'zod';

const SenderSchema = z.object({
  Organization: z.object({
    oid: z.string(),
    fullName: z.string(),
  }),
});

const DocumentSchema = z.object({
  id: z.string(),
  documentType_id: z.union([z.string(), z.number()]),
  documentType_Name: z.string(),
  series: z.union([z.string(), z.number()]),
  number: z.string(),
  beginDate: z.string(),
  endDate: z.string().nullable(),
  orgDep_Name: z.string(),
  lpu_id: z.string(),

  name: z.string().nullable().optional(),
  formType_id: z.string().nullable().optional(),
  smo_id: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  documentDeputy_begDate: z.string().nullable().optional(),
  documentDeputy_Issue: z.string().nullable().optional(),
  documentDeputy_Ser: z.string().nullable().optional(),
  documentDeputy_Num: z.string().nullable().optional(),
  sprTerr_id: z.string().nullable().optional(),
  isTwoNation: z.boolean().nullable().optional(),
  personEvn_begDT: z.string().nullable().optional(),
  orgDep_id: z.string().nullable().optional(),
});

const AddressSchema = z.object({
  id: z.string(),
  value: z.string(),
  org_id: z.string().nullable(),
  post_id: z.string().nullable(),
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
  patrName: z.string().nullable(),
  birthDate: z.string(),
  sex: z.union([z.string(), z.number()]),
  phoneNumber: z.string(),
  snils: z.string().nullable(),
  inn: z.string().nullable(),
  socStatus_id: z.string().nullable(),
  socStatusFed_Code: z.string().nullable(),
  pid: z.string().nullable(),
  parPersonSurName_SurName: z.string().nullable(),
  parPersonFirName_FirName: z.string().nullable(),
  parPersonSecName_SecName: z.string().nullable(),
  deputyKind_id: z.string().nullable(),
  deputyOrg_id: z.string().nullable(),
  documentAuthority_id: z.string().nullable(),
  employment_id: z.string().nullable(),
  familyStatus_id: z.string().nullable(),
  personFamilyStatus_IsMarried: z.boolean().nullable(),
  legalStatusVZN_id: z.string().nullable(),
  legalStatusVZN_Name: z.string().nullable(),
  legalStatusVZN_pid: z.string().nullable(),
  legalStatusVZN_pName: z.string().nullable(),
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
