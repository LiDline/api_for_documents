import { z } from 'zod';

import { DocumentRequestSchema } from './validation/updateDocumentRequestSchema';

export type UpdateDocument = z.infer<typeof DocumentRequestSchema>;
