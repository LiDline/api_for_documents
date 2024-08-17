import type {
  CreateUsersRequest,
  JSONForNewUserSchema,
} from '../users.interface';
import createNewUsers from './func/createUsers/createNewUsers';

export default async function createUsers(
  input: CreateUsersRequest,
  id: number,
) {
  // Тут можно и параллельно
  const res = await Promise.all(
    input.map(async (i: JSONForNewUserSchema) => {
      const res = await Promise.all(
        i.Data.map(async (d) => await createNewUsers(d, id)),
      );

      return res;
    }),
  );

  return res;
}
