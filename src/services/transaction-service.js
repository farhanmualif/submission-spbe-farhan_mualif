import { NotFoundError } from "../utils/errors.js";

export class TransactionService {
  constructor(transactionRepository, cartRepository) {
    this.cartRepository = cartRepository;
    this.transactionRepository = transactionRepository;
  }


  async getInvoices(custID) {
    return await this.transactionRepository.getInvoicesByCustomerId(custID);
  }

  async checkout(custID) {
    const cart = await this.cartRepository.findByCustomerId(custID);

    if (!cart || cart.CartItems.length === 0) {
      throw new NotFoundError('No carts found for the given customer ID');
    }

    const cartItems = cart.CartItems;

    const validItems = cartItems.filter(item => item.product && item.quantity > 0);
    if (validItems.length === 0) {
      throw new NotFoundError('No valid cart items found for checkout');
    }

    const totalAmount = validItems
      .map(item => item.product.price * item.quantity)
      .reduce((a, b) => a + b, 0);

    const data = {
      totalAmount,
      issuedAt: new Date(),
      status: 'pending',
      customerID: custID,
      cartID: cart.id,
      cartItems: validItems.map(item => ({
        bookID: item.product.bookID,
        quantity: item.quantity,
        price: item.product.price,
      })),
    };

    const transaction = await this.transactionRepository.checkout(data);

    // remove items from cart after checkout
    await this.cartRepository.removeItemsFromCart(cart.id, validItems.map(item => item.product.bookID));

    return transaction;
  }


}