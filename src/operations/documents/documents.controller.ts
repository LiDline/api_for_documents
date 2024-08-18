import { Body, Controller, Delete, Param, Post } from '@nestjs/common';

import { CUSTOM_ERRORS, URL_OBJECT } from 'src/CONST';
import { DocumentsService } from './documents.service';
import errorResponse from 'src/generalMethods/errorResponse';
import { IdSchema } from 'src/generalValidations/utils';
import { MiddlewareDto } from 'src/generalValidations/InputDto';
import { DocumentDto } from './documents.dto';
import { CreatedDocument } from '../users/users.interface';

@Controller(URL_OBJECT.documents.first)
export class DocumentsController {
  constructor(private readonly usersService: DocumentsService) {}

  @Delete(URL_OBJECT.documents.additional.deleteDocument + '/:id')
  async deleteDocument(
    @Param('id') id: string,
    @Body()
    input: MiddlewareDto,
  ): Promise<void> {
    errorResponse(Number(id), IdSchema, CUSTOM_ERRORS.wrongId);

    await this.usersService.deleteDocument(Number(id), input.id);
  }

  @Post(URL_OBJECT.documents.additional.updateDocument)
  async updateDocument(
    @Body()
    input: DocumentDto,
  ): Promise<void> {
    await this.usersService.updateDocument(input.body, input.id);
  }

  @Post(URL_OBJECT.documents.additional.createDocument)
  async createDocument(
    @Body()
    input: DocumentDto,
  ): Promise<CreatedDocument> {
    const res = await this.usersService.createDocument(input.body, input.id);

    return res;
  }
}
