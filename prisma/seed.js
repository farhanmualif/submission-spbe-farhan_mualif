import { faker } from '@faker-js/faker';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('Starting to delete existing data...');
    await prisma.token.deleteMany();
    await prisma.invoiceItems.deleteMany();
    await prisma.invoices.deleteMany();
    await prisma.cartItems.deleteMany();
    await prisma.cart.deleteMany();
    await prisma.booksProducts.deleteMany();
    await prisma.books.deleteMany();
    await prisma.warehouses.deleteMany();
    await prisma.customers.deleteMany();
    await prisma.autors.deleteMany();
    console.log('Existing data deleted.');

    // Autors
    const authorsData = Array.from({ length: 5 }).map(() => ({
      name: faker.person.fullName(),
      bio: faker.lorem.paragraph(),
      birtdate: faker.date.past({ years: 60 }),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await prisma.autors.createMany({ data: authorsData });
    const authors = await prisma.autors.findMany();

    // Customers
    const customersData = Array.from({ length: 5 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.location.streetAddress(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await prisma.customers.createMany({ data: customersData });
    const customers = await prisma.customers.findMany();

    // Books
    const booksData = Array.from({ length: 5 }).map(() => ({
      title: faker.commerce.productName(),
      isbn: faker.string.uuid(),
      publicationYear: faker.number.int({ min: 1900, max: 2025 }),
      genre: faker.helpers.arrayElement(['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery']),
      authorID: authors[Math.floor(Math.random() * authors.length)].id,
      status: faker.helpers.arrayElement(['Available', 'Out of Stock']),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await prisma.books.createMany({ data: booksData });
    const books = await prisma.books.findMany();

    // Warehouses
    const warehousesData = Array.from({ length: 5 }).map(() => ({
      name: faker.company.name() + ' Warehouse',
      address: faker.location.streetAddress(),
      location: faker.location.city(),
      capacity: faker.number.int({ min: 100, max: 1000 }).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await prisma.warehouses.createMany({ data: warehousesData });
    const warehouses = await prisma.warehouses.findMany();

    // BooksProducts
    const booksProductsData = Array.from({ length: 5 }).map(() => {
      const book = books[Math.floor(Math.random() * books.length)];
      const warehouse = warehouses[Math.floor(Math.random() * warehouses.length)];
      return {
        bookID: book.id,
        price: parseFloat(faker.commerce.price({ min: 10, max: 100 })),
        stock: faker.number.int({ min: 1, max: 100 }),
        format: faker.helpers.arrayElement(['Hardcover', 'Paperback', 'Ebook']),
        warehouseID: warehouse.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await prisma.booksProducts.createMany({ data: booksProductsData });
    const booksProducts = await prisma.booksProducts.findMany();

    // Cart
    const cartsData = Array.from({ length: 5 }).map(() => ({
      customerID: customers[Math.floor(Math.random() * customers.length)].id,
      createdAt: new Date(),
    }));
    await prisma.cart.createMany({ data: cartsData });
    const carts = await prisma.cart.findMany({ include: { customer: true } });

    // CartItems
    const cartItemsData = Array.from({ length: 5 }).map(() => {
      const cart = carts[Math.floor(Math.random() * carts.length)];
      const booksProduct = booksProducts[Math.floor(Math.random() * booksProducts.length)];
      return {
        cartID: cart.id,
        productID: booksProduct.id,
        quantity: faker.number.int({ min: 1, max: 5 }),
        booksId: booksProduct.bookID,
        createdAt: new Date(),
      };
    });
    await prisma.cartItems.createMany({ data: cartItemsData });

    // Invoices
    const invoicesData = Array.from({ length: 5 }).map(() => {
      const cart = carts[Math.floor(Math.random() * carts.length)];
      return {
        totalAmount: parseFloat(faker.commerce.price({ min: 20, max: 200 })),
        issuedAt: faker.date.recent(),
        status: faker.helpers.arrayElement(['Paid', 'Pending', 'Cancelled']),
        customerID: cart.customer.id,
        cartID: cart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await prisma.invoices.createMany({ data: invoicesData });
    const invoices = await prisma.invoices.findMany();

    // InvoiceItems
    const invoiceItemsData = Array.from({ length: 5 }).map(() => {
      const invoice = invoices[Math.floor(Math.random() * invoices.length)];
      const book = books[Math.floor(Math.random() * books.length)];
      const booksProduct = booksProducts.find((bp) => bp.bookID === book.id) || booksProducts[0];
      return {
        bookID: book.id,
        quantity: faker.number.int({ min: 1, max: 5 }),
        price: booksProduct.price,
        invoiceID: invoice.id,
      };
    });
    await prisma.invoiceItems.createMany({ data: invoiceItemsData });

    // Token
    const JWT_SECRET = process.env.JWT_SECRET;
    const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
    if (!JWT_SECRET || !JWT_EXPIRES_IN) {
      throw new Error('JWT_SECRET or JWT_EXPIRES_IN is not defined in .env');
    }

    for (let i = 0; i < 5; i++) {
      const customer = customers[Math.floor(Math.random() * customers.length)];
      const uniqueTimestamp = Date.now() + i;
      const token = jwt.sign(
        {
          id: customer.id,
          email: customer.email,
          name: customer.name,
          uniqueTimestamp,
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      await prisma.token.create({
        data: {
          token,
          customerId: customer.id,
          createdAt: new Date(),
          expiredAt: new Date(Date.now() + (JWT_EXPIRES_IN === '1h' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000)),
        },
      });
    }

    console.log('✅ Seeding completed!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
