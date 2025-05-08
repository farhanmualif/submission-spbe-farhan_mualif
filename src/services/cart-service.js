import { BadRequestError, NotFoundError } from "../utils/errors.js";

export class CartService {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async getCarts(customerId) {
    const cart = await this.cartRepository.findByCustomerId(customerId);
    return cart
    
  }

  async createCart(data) {
    const existingCart = await this.cartRepository.findByCustomerId(data.customerId);

    if (!existingCart) {
      return await this.cartRepository.createCart(data);
    }

    const existingItem = existingCart.CartItems.find(
      item => item.product.id === data.booksProductId
    );

    if (!existingItem) {
      return await this.cartRepository.addCartItem(existingCart.id, data);
    }

    const newQty = existingItem.quantity + data.quantity;
    return await this.cartRepository.updateCartItemQuantity(existingItem.id, newQty);
  }

  

  async findCartById(id) {
    if (!id) {
      throw new BadRequestError('Book ID is required');
    }
    const book = await this.cartRepository.findCartById(id);
    if (!book) {
      throw new NotFoundError('Book not found');
    }
    return book;
  }
}