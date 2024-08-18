import { createZodDto } from 'nestjs-zod';

import { InputSingleDto } from 'src/generalValidations/InputDto';
import { UpdateDocumentRequestSchema } from './validation/updateDocumentRequestSchema';

export class UpdateDocumentDto extends createZodDto(
  InputSingleDto(UpdateDocumentRequestSchema),
) {}
