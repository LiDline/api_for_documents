import type { UserInstance } from 'src/bd/interfaces.db';
import type { AboutMe } from 'src/operations/users/users.interface';
import extractNameFromUser from './extractNameFromUser';
import extractDocumentsFromUser from 'src/operations/users/service/func/aboutMe/extractDocumentsFromUser';

export default function modifyUserForResponse(users: UserInstance[]) {
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
