import { z } from 'zod';


export const addCartSchema = z.object({
  books_product_id: z.string().min(1, 'book_product_id is required'),
  quantity:  z.number(),
});