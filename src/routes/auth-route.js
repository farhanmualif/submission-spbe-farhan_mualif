import express from 'express';
import { registerSchema, loginSchema } from '../schemas/auth-schema.js';
import { validate } from '../middlewares/validate-middleware.js';

export const createAuthRouter = (authController) => {
  const router = express.Router();

  router.post('/register', validate(registerSchema), authController.register.bind(authController));
  router.post('/login', validate(loginSchema), authController.login.bind(authController));
  router.post('/logout', authController.logout.bind(authController));

  return router;
};
