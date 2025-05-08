import { BadRequestError, NotFoundError } from "../utils/errors.js";

export class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async getBooks() {
    return await this.bookRepository.getBooks();
  }

  async findBookById(id) {
    if (!id) {
      throw new BadRequestError('Book ID is required');
    }
    const book = await this.bookRepository.findBookById(id);
    if (!book) {
      throw new NotFoundError('Book not found');
    }
    return book;
  }
}