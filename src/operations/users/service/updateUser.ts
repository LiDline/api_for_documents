import type { GenderNumber, UpdateUserRequest } from '../users.interface';

import { User } from 'src/bd/models/models';

export default async function updateUser(
  user: UpdateUserRequest,
  authorId: number,
) {
  const sex = Number(user.sex) as GenderNumber;

  const updatedUser = await User.update(
    {
      last_name: user.lastName,
      first_name: user.firstName,
      patr_name: user.patrName,
      gender_id: sex,

      modify_datetime: new Date(),
      modify_user_id: authorId,
    },
    { where: { id: user.id } },
  );

  return updatedUser;
}
