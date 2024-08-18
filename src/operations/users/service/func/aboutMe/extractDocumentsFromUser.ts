import type { UserInstance } from 'src/bd/interfaces.db';

import {
  DataForDocumentsTableResponse,
  CreatedDocument,
} from 'src/operations/users/users.interface';

export default function extractDocumentsFromUser(
  user: UserInstance | null,
): CreatedDocument[] | undefined {
  const documents = user?.documents?.map((d): CreatedDocument => {
    const data = JSON.parse(d.data ?? '') as DataForDocumentsTableResponse;

    return {
      id: d.id!,
      type: Number(d.type_id),
      userId: Number(d.user_id),
      data,
    };
  });

  return documents;
}
