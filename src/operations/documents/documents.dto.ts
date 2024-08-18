import { createZodDto } from 'nestjs-zod';

import { InputSingleDto } from 'src/generalValidations/InputDto';
import { DocumentRequestSchema } from './validation/updateDocumentRequestSchema';

export class DocumentDto extends createZodDto(
  InputSingleDto(DocumentRequestSchema),
) {}
