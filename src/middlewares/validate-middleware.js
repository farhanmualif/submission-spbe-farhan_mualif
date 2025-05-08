import { fromZodError } from 'zod-validation-error';

export const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    
    if (!result.success) {
      const errorMessage = fromZodError(result.error).message;
      return res.status(400).json({ error: errorMessage });
    }
    
    req.validatedData = result.data;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};