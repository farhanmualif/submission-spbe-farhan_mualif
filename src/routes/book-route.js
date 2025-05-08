import express from 'express';
import { authenticated } from '../middlewares/auth-middleware.js';

export const createBookRouter = (bookController) => {
  const router = express.Router();

  router.get('/', authenticated, bookController.getBooks.bind(bookController));
  router.get('/:id', authenticated, bookController.findBookById.bind(bookController));
  
  return router;
};
