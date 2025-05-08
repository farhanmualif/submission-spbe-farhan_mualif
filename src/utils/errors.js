export class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends BaseError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message = 'Unauthorized access') {
    super(message, 401);
  }
}

export class BadRequestError extends BaseError {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}
export class UnprocessableEntityError extends BaseError {
  constructor(message = 'Unprocess request') {
    super(message, 422);
  }
}

export class InternalServerError extends BaseError {
  constructor(message = 'Internal server error') {
    super(message, 500);
  }
}
