import type { UpdateDocument } from '../documents.interface';
import type {
  CreatedDocument,
  DataForDocumentsTableResponse,
} from 'src/operations/users/users.interface';

import { Document } from 'src/bd/models/models';

export default async function createDocument(
  input: UpdateDocument,
  authorId: number,
): Promise<CreatedDocument> {
  const data = {
    referralDate: input.data.referralDate,
    referralId: input.data.referralDate,
    senderName: input.data.senderName,
    name: input.data.name,
    series: input.data.series,
    number: input.data.number,
    beginDate: input.data.beginDate,
    endDate: input.data.endDate,
    issuedName: input.data.issuedName,
  } as DataForDocumentsTableResponse;

  const newDocument = await Document.create({
    user_id: input.userId,
    type_id: Number(input.typeId),
    data: JSON.stringify(data),

    create_user_id: authorId,
    create_datetime: new Date(),
  });

  return {
    id: newDocument.id!,
    type: Number(input.typeId),
    userId: Number(input.userId),
    data,
  };
}
