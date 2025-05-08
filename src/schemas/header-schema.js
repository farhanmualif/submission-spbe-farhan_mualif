import { z } from 'zod';
export const headerSchema = z.object({
    authorization: z.string().refine((val) => val.startsWith('Bearer '), {
      message: 'Authorization header must start with Bearer',
    }),
  });
