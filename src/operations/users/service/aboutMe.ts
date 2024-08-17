import extractNameFromUser from 'src/generalMethods/extractNameFromUser';
import findOneUserByParams from 'src/generalMethods/findOneUserByParams';
import extractDocumentsFromUser from './func/aboutMe/extractDocumentsFromUser';

export default async function aboutMe(id: number) {
  const user = await findOneUserByParams({ id }, true);

  const dataUser = extractNameFromUser(user!);

  const documents = extractDocumentsFromUser(user);

  return {
    user: dataUser,
    documents,
  };
}
