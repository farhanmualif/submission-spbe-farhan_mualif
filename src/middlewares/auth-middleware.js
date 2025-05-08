import { prisma } from '../../config/db.js'; 
import { UnauthorizedError } from '../utils/errors.js'; 
import { headerSchema } from '../schemas/header-schema.js';

export async function authenticated(req, res, next) {

  try {
    const headers = headerSchema.parse(req.headers);
    const token = headers.authorization.split(' ')[1];

    const findToken = await prisma.token.findUnique({
      where: {
        token,
      },
      include: {
        customer: true,
      },
    });

    if (!findToken || !findToken.customer) {
      throw new UnauthorizedError('Please login first');
    }
    delete findToken.customer.password;
    res.account = findToken.customer;

    next();
  } catch (error) {
    next(error);
  }
}



