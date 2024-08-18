import { z } from 'zod';

import { DataForDocumentsTableResponseSchema } from 'src/operations/users/validation/createUsersSchema';

export const DocumentRequestSchema = z.object({
  id: z.number().optional(),
  typeId: z.string().or(z.number()),
  data: DataForDocumentsTableResponseSchema,
  userId: z.number().optional(),
});
