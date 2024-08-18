import type {
  CreatedDocument,
  DataForDocumentsTableResponse,
  DocumentsNumber,
  InitDataForDocument,
  UserInJSON,
} from 'src/operations/users/users.interface';

import { Document } from 'src/bd/models/models';

export default async function createDocuments(
  user: UserInJSON,
  initDataForDocument: InitDataForDocument,
  newUserId: number,
  authorId: number,
): Promise<CreatedDocument[]> {
  const createdDocuments = await Promise.all(
    user.Documents.map(async (d): Promise<CreatedDocument> => {
      const typeId = Number(d.documentType_id) as DocumentsNumber;

      const data = {
        ...initDataForDocument,
        name: d.documentType_Name,
        series: d.series,
        number: d.number,
        beginDate: d.beginDate,
        endDate: d.endDate,
        issuedName: d.orgDep_Name,
      } as DataForDocumentsTableResponse;

      const newDocument = await Document.create({
        user_id: newUserId,
        type_id: typeId,
        data: JSON.stringify(data),

        create_user_id: authorId,
        create_datetime: new Date(),
      });
      console.log(data);

      return {
        id: newDocument.id!,
        type: typeId,
        userId: newUserId,
        data,
      };
    }),
  );

  return createdDocuments;
}
