import ms from 'ms';

export class AuthRepository {
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async findUserByEmail(email) {
    return await this.prisma.customers.findUnique({ where: { email } });
  }

  async createUser(userData) {
    return await this.prisma.customers.create({ data: userData });
  }


  async saveToken(token, userID, expiresIn) {
    return await this.prisma.token.create({
      data: {
        token,
        customerId: userID,
        expiredAt: new Date(Date.now() + ms(expiresIn)),
      }
    })
  }
}