import { InternalServerError } from "../utils/errors.js";

export class TransactionRepository {
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }


  async getInvoicesByCustomerId(customerID) {

    // Validasi input
    if (!customerID || typeof customerID !== 'string') {
      throw new InternalServerError('Customer ID must be a non-empty string');
    }

    const invoices = await this.prisma.invoices.findMany({
      where: {
        customerID: {
          equals: customerID,
          mode: 'insensitive', // Case-insensitive
        },
      },
      include: {
        InvoiceItems: true, // Sertakan relasi
      },
    });

    return invoices;
  }

  async checkout(data) {
    const { totalAmount, issuedAt, status, customerID, cartID, cartItems } = data;

    const invoice = await this.prisma.invoices.create({
      data: {
        customerID,
        cartID,
        totalAmount,
        issuedAt: issuedAt,
        status: status,
        InvoiceItems: {
          create: cartItems.map(item => ({
            book: { connect: { id: item.bookID } },
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        InvoiceItems: true,
      },
    });

    return invoice;

  }

 
}