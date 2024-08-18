import { Injectable } from '@nestjs/common';

import type { UpdateDocument } from './documents.interface';

import { Document } from 'src/bd/models/models';
import updateDocument from './service/updateDocument';
import createDocument from './service/createDocument';

@Injectable()
export class DocumentsService {
  async deleteDocument(id: number, authorId: number) {
    return await Document.update(
      { deleted: 1, modify_datetime: new Date(), modify_user_id: authorId },
      { where: { id } },
    );
  }

  async updateDocument(change: UpdateDocument, authorId: number) {
    return await updateDocument(change, authorId);
  }

  async createDocument(input: UpdateDocument, authorId: number) {
    return await createDocument(input, authorId);
  }
}
