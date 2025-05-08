import 'dotenv/config'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import express from 'express';
import { AuthRepository } from './repositories/auth-repository.js';
import { AuthService } from './services/auth-service.js';
import { AuthController } from './controllers/auth-controller.js';
import { createAuthRouter } from './routes/auth-route.js';

import { BookRepository } from './repositories/book-repository.js';
import { BookService } from './services/book-service.js';
import { BookController } from './controllers/book-controller.js';
import { createBookRouter } from './routes/book-route.js';
import { errorHandler } from './middlewares/error-handler.js';
import { createCartRoute } from './routes/cart-route.js';
import { CartRepository } from './repositories/cart-repository.js';
import { CartService } from './services/cart-service.js';
import { CartController } from './controllers/cart-controller.js';
import { TransactionRepository } from './repositories/transaction-repository.js';
import { TransactionService } from './services/transaction-service.js';
import { TransactionCntroller } from './controllers/transaction-controller.js';
import { createTransactionRouter } from './routes/transactio-route.js';


const app = express();
app.use(express.json());

const prisma = new PrismaClient().$extends(withAccelerate())


const authRepository = new AuthRepository(prisma);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);


const bookRepository = new BookRepository(prisma);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);


const cartRepositoy = new CartRepository(prisma);
const cartService = new CartService(cartRepositoy);
const cartController = new CartController(cartService);

const transactionRepository = new TransactionRepository(prisma);
const transactionService = new TransactionService(transactionRepository, cartRepositoy);
const transactionController = new TransactionCntroller(transactionService);

app.use("/auth", createAuthRouter(authController))
app.use("/books", createBookRouter(bookController))
app.use("/cart", createCartRoute(cartController))
app.use("/", createTransactionRouter(transactionController))

app.use(errorHandler)

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});