export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async register(req, res) {
    try {
      const user = await this.authService.register(req.validatedData);
      res.status(201).json(user);
    } catch (error) {
      throw error;
    }
  }

  async login(req, res) {
    try {
      const user = await this.authService.login(req.validatedData);
      res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  }

  async logout(req, res) {
    try {
      const result = await this.authService.logout();
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }
}