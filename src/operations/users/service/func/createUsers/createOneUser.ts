import type { UserInJSON } from 'src/operations/users/users.interface';

import { User } from 'src/bd/models/models';
import toBase64 from 'src/generalMethods/toBase64';

export default async function createOneUser(user: UserInJSON, id: number) {
  const login = user.Credentials.username;

  const uniqueLogin = await User.findOne({ where: { login } });

  if (uniqueLogin) {
    throw new Error();
  }

  const newUser = await User.create({
    last_name: user.lastName,
    first_name: user.firstName,
    patr_name: user.patrName,

    gender_id: Number(user.sex),

    login,
    password: toBase64(user.Credentials.pass),

    create_user_id: id,
    deleted: 0,
  });

  return newUser;
}
