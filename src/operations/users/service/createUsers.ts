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
): Promise<PromiseSettledResult<CreateNewUsers>[]> {
  // Тут можно и параллельно
  const res = await Promise.all(
    input.map(async (i: JSONForNewUserSchema) => {
      const tasks = i.Data.map((d) => {
        const initDataForDocument: InitDataForDocument = {
          referralId: i.referralGUID,
          referralDate: i.referralDate,
          senderName: d.Sender.Organization.fullName,
        };

        return createNewUsers(d, initDataForDocument, authorId);
      });

      return await Promise.all(tasks);
    }),
  );

  return res.flat().flat().flat();
}
