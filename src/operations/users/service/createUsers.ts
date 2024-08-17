import type {
  CreateNewUsers,
  CreateUsersRequest,
  InitDataForDocument,
  JSONForNewUserSchema,
} from '../users.interface';

import createNewUsers from './func/createUsers/createNewUsers';

export default async function createUsers(
  input: CreateUsersRequest,
  authorId: number,
): Promise<PromiseSettledResult<CreateNewUsers>[][][]> {
  // Тут можно и параллельно
  const res = await Promise.all(
    input.map(async (i: JSONForNewUserSchema) => {
      const res = await Promise.all(
        i.Data.map(async (d) => {
          const initDataForDocument: InitDataForDocument = {
            referralId: i.referralGUID,
            referralDate: i.referralDate,
            senderName: d.Sender.Organization.fullName,
          };

          return await createNewUsers(d, initDataForDocument, authorId);
        }),
      );

      return res;
    }),
  );

  return res;
}
