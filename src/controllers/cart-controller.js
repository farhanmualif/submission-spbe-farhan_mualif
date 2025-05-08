import { th } from "@faker-js/faker";


export class CartController {
  constructor(cartService) {
    this.cartService = cartService;
  }

  async createCart(req, res) {
    try {
      
      const reqData = {
        customerId: res.account.id,
        booksProductId: req.body.books_product_id,
        quantity: req.body.quantity,
      }

      const data = await this.cartService.createCart(reqData);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCarts(req, res) {
    try {
      const data = await this.cartService.getCarts(res.account.id);
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  }

  async findCartById(req, res) {
    const { id } = req.params;
    try {
      const data  = await this.cartService.findCartById(id);
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  }
}