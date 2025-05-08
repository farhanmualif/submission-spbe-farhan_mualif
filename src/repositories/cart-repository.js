import { NotFoundError } from "../utils/errors.js";

export class CartRepository {
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }


  async createCart(data) {
    const { customerId, booksProductId, quantity } = data;

    const bookProduct = await this.prisma.booksProducts.findUnique({
      where: { id: booksProductId },
      select: {
        id: true,
        bookID: true,
      },
    });

    if (!bookProduct) {
      throw new NotFoundError(`Book product with ID ${booksProductId} not found`);
    }

    const cart = await this.prisma.cart.create({
      data: {
        customerID: customerId,
        CartItems: {
          create: {
            quantity,
            createdAt: new Date(),
            product: {
              connect: { id: booksProductId }, 
            },
            Books: {
              connect: { id: bookProduct.bookID }, 
            },
          },
        },
      },
      include: {
        CartItems: true,
      },
    });


    return cart.CartItems;
}


  async getCarts() {
     return await this.prisma.carts.findMany({
        include: {
          Books: {
            include: {
              warehouse: true,
            },
          },
        },
      });
  }

  async findCartById(id) {
      const cart = await this.prisma.carts.findUnique({
        where: { id },
        include: {
          CartsProducts: {
            include: {
              warehouse: true,
            },
          },
        },
      });
      return cart;
  }

  async findByCustomerId(customerId) {
    return await this.prisma.cart.findFirst({
      where: { customerID: customerId },
      include: {
        CartItems: {
          include: {
            product: {
              include: {
                warehouse: true,
              },
            },
          },
        },
      },
    });
  }

  async updateCartItemQuantity(cartItemId, quantity) {
    return await this.prisma.cartItems.update({
      where: { id: cartItemId },
      data: { quantity },
    });
  }

  async addCartItem(cartId, data) {
    const { booksProductId, quantity } = data;

    const bookProduct = await this.prisma.booksProducts.findUnique({
      where: { id: booksProductId },
      select: {
        id: true,
        bookID: true,
      },
    });

    if (!bookProduct) {
      throw new NotFoundError(`Book product with ID ${booksProductId} not found`);
    }

    const newItem = await this.prisma.cartItems.create({
      data: {
        quantity,
        createdAt: new Date(),
        cart: {
          connect: { id: cartId },
        },
        product: {
          connect: { id: booksProductId },
        },
        Books: {
          connect: { id: bookProduct.bookID },
        },
      },
    });

    return newItem;
  }

  async removeItemsFromCart(cartID, bookIDs) {
    return await this.prisma.cartItems.deleteMany({
      where: {
        cartID: cartID,
        booksId: { in: bookIDs },
      },
    });
  }
}