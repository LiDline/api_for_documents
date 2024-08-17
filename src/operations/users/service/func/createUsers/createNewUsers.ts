import type {
  CreateNewUsers,
  DataInJSONForNewUser,
  InitDataForDocument,
} from 'src/operations/users/users.interface';

import createOneUser from './createOneUser';
import createDocuments from './createDocuments';

export default async function createNewUsers(
  data: DataInJSONForNewUser,
  initDataForDocument: InitDataForDocument,
  authorId: number,
): Promise<PromiseSettledResult<CreateNewUsers>[]> {
  const res = await Promise.allSettled(
    data.Users.map(async (user): Promise<CreateNewUsers> => {
      const newUser = await createOneUser(user, authorId);

      const newDocuments = await createDocuments(
        user,
        initDataForDocument,
        newUser.id,
        authorId,
      );

      return { user: newUser, documents: newDocuments };
    }),
  );

  return res;
}
