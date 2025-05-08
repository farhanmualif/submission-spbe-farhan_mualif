import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { BadRequestError, NotFoundError } from '../../src/utils/errors.js'; 
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async register(registerData) {
    const { name, email, password, address } = registerData;

    const existingUser = await this.authRepository.findUserByEmail(email);
    if (existingUser) {
      throw new NotFoundError('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await this.authRepository.createUser({
      name,
      email,
      address,
      password: hashedPassword
    });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      address: newUser.address
    };
  }

  async login(loginData) {
    const { email, password } = loginData;

    const user = await this.authRepository.findUserByEmail(email);
    if (!user) {
      throw new NotFoundError('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    await this.authRepository.saveToken(token, user.id, JWT_EXPIRES_IN);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address
      }
    }
  };

  async logout() {
    return { message: 'Logged out successfully' };
  }
}