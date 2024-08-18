import { Controller } from '@nestjs/common';

import { URL_OBJECT } from 'src/CONST';
import { DocumentsService } from './documents.service';

@Controller(URL_OBJECT.users.first)
export class DocumentsController {
  constructor(private readonly usersService: DocumentsService) {}
}
