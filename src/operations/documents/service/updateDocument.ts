import type { UpdateDocument } from '../documents.interface';

import { Document } from 'src/bd/models/models';

export default async function updateDocument(
  change: UpdateDocument,
  authorId: number,
) {
  const updatedDocument = await Document.update(
    {
      type_id: Number(change.typeId),
      data: JSON.stringify(change.data),

      modify_datetime: new Date(),
      modify_user_id: authorId,
    },
    {
      where: { id: change.id },
    },
  );

  return updatedDocument;
}
