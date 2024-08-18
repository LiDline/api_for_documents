import { UserInstance } from 'src/bd/interfaces.db';
import { DOCUMENTS } from 'src/operations/users/users.const';
import {
  DataForDocumentsTableResponse,
  DocumentsNumber,
  ExtractDocumentsFromUser,
} from 'src/operations/users/users.interface';

export default function extractDocumentsFromUser(
  user: UserInstance | null,
): ExtractDocumentsFromUser[] | undefined {
  const documents = user?.documents?.map((d): ExtractDocumentsFromUser => {
    const data = JSON.parse(d.data ?? '') as DataForDocumentsTableResponse;

    return {
      id: d.id!,
      type: DOCUMENTS[d.type_id as DocumentsNumber],
      data,
    };
  });

  return documents;
}
