import { z } from 'zod';

import { DataForDocumentsTableResponseSchema } from 'src/operations/users/validation/createUsersSchema';

export const UpdateDocumentRequestSchema = z.object({
  id: z.number(),
  typeId: z.string().or(z.number()),
  data: DataForDocumentsTableResponseSchema,
  userId: z.number(),
});
