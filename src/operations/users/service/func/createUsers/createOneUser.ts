import type {
  ResponseOneUser,
  GenderNumber,
  UserInJSON,
} from 'src/operations/users/users.interface';

import { User } from 'src/bd/models/models';
import toBase64 from 'src/generalMethods/toBase64';

export default async function createOneUser(
  user: UserInJSON,
  id: number,
): Promise<ResponseOneUser> {
  let login: string | null = user.Credentials.username;

  const sex = Number(user.sex) as GenderNumber;

  const uniqueLogin = await User.findOne({ where: { login } });

  if (uniqueLogin) {
    login = null;
  }

  const newUser = await User.create({
    last_name: user.lastName,
    first_name: user.firstName,
    patr_name: user.patrName,
    gender_id: sex,

    login,
    password: login ? toBase64(user.Credentials.pass) : null,

    type_id: 2,

    create_datetime: new Date(),
    create_user_id: id,
    deleted: 0,
  });

  const res = {
    lastName: user.lastName,
    firstName: user.firstName,
    patrName: user.patrName,
    sex,
    id: newUser.id!,
  };

  return res;
}
