import type { UserInstance } from 'src/bd/interfaces.db';

import {
  DataForDocumentsTableResponse,
  ExtractDocumentsFromUser,
} from 'src/operations/users/users.interface';

export default function extractDocumentsFromUser(
  user: UserInstance | null,
): ExtractDocumentsFromUser[] | undefined {
  const documents = user?.documents?.map((d): ExtractDocumentsFromUser => {
    const data = JSON.parse(d.data ?? '') as DataForDocumentsTableResponse;

    return {
      id: d.id!,
      type: Number(d.type_id),
      data,
    };
  });

  return documents;
}
