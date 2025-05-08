

export class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  async getBooks(req, res) {
    try {
      const data = await this.bookService.getBooks();
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  }

  async findBookById(req, res) {
    const { id } = req.params;
    try {
      const data  = await this.bookService.findBookById(id);
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  }
}