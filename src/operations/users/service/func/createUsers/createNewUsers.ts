import type { DataInJSONForNewUser } from 'src/operations/users/users.interface';

import createOneUser from './createOneUser';

export default async function createNewUsers(
  data: DataInJSONForNewUser,
  id: number,
) {
  const res = await Promise.allSettled(
    data.Users.map(async (user) => {
      const newUser = await createOneUser(user, id);

      return;
    }),
  );

  return res;
}
