import type {
  CreatedDocuments,
  DataForDocumentsTable,
  DocumentsNumber,
  InitDataForDocument,
  UserInJSON,
} from 'src/operations/users/users.interface';

import { Document } from 'src/bd/models/models';
import { DOCUMENTS } from 'src/operations/users/users.const';

export default async function createDocuments(
  user: UserInJSON,
  initDataForDocument: InitDataForDocument,
  newUserId: number,
  authorId: number,
): Promise<CreatedDocuments[]> {
  const createdDocuments = await Promise.all(
    user.Documents.map(async (d): Promise<CreatedDocuments> => {
      const typeId = Number(d.documentType_id) as DocumentsNumber;

      const data = JSON.stringify({
        ...initDataForDocument,
        name: d.documentType_Name,
        series: d.series,
        number: d.number,
        beginDate: d.beginDate,
        endDate: d.endDate,
        issuedName: d.orgDep_Name,
      } as DataForDocumentsTable);

      const newDocument = await Document.create({
        user_id: newUserId,
        type_id: typeId,
        data,

        create_user_id: authorId,
      });

      return {
        id: newDocument.id!,
        type: DOCUMENTS[typeId],
        data,
      };
    }),
  );

  return createdDocuments;
}
