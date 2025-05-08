export class BookRepository {
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async getBooks() {
     return await this.prisma.books.findMany({
        include: {
          author: true,
        },
      });
  }

  async findBookById(id) {
      const book = await this.prisma.books.findUnique({
        where: { id },
        include: {
          BooksProducts: {
            include: {
              warehouse: true,
            },
          },
        },
      });
      return book;
  }
}