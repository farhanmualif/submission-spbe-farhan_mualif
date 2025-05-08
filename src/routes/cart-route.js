import express from 'express';
import { authenticated } from '../middlewares/auth-middleware.js';
import { validate } from '../middlewares/validate-middleware.js';
import { addCartSchema } from '../schemas/add-cart-schema.js';


export const createCartRoute = (cartController) => { 
  const router = express.Router();

  router.get('/', authenticated,  cartController.getCarts.bind(cartController));
  router.post('/items', authenticated, validate(addCartSchema), cartController.createCart.bind(cartController))

  return router;
}