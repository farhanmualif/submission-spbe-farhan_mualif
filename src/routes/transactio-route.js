import express from 'express';

import { authenticated } from '../middlewares/auth-middleware.js';


export const createTransactionRouter = (transactionController) => { 
  const route = express.Router();
  route.post('/checkout', authenticated, transactionController.checkout.bind(transactionController));
  route.get('/invoices', authenticated, transactionController.getInvoices.bind(transactionController));
  
  return route;
}