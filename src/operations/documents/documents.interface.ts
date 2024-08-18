import { z } from 'zod';

import { UpdateDocumentRequestSchema } from './validation/updateDocumentRequestSchema';

export type UpdateDocument = z.infer<typeof UpdateDocumentRequestSchema>;
