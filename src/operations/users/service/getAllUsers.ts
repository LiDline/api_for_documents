import type { AboutMe, GetAllUsersRequest } from '../users.interface';

import { Document, GenderType, User, UserType } from 'src/bd/models/models';
import extractNameFromUser from 'src/generalMethods/extractNameFromUser';
import extractDocumentsFromUser from './func/aboutMe/extractDocumentsFromUser';

export default async function getAllUsers(
  params: GetAllUsersRequest,
): Promise<AboutMe[]> {
  const users = await User.findAll({
    limit: params.limit,
    offset: params.offset,

    include: [
      {
        model: UserType,
      },
      {
        model: GenderType,
      },
      {
        model: Document,
      },
    ],
  });

  const res = users.map((u): AboutMe => {
    const dataUser = extractNameFromUser(u!);

    const documents = extractDocumentsFromUser(u);

    return {
      user: dataUser,
      documents,
    };
  });

  return res;
}
