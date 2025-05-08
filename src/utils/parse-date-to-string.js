import { z } from 'zod';
import { BadRequestError } from '../utils/errors.js';

export const dateStringToDate = (bodyValueDate) => {
  if (bodyValueDate instanceof Date) return bodyValueDate;
  if (typeof bodyValueDate !== 'string')
    throw new BadRequestError(
      `Expected a string for date, but received ${typeof bodyValueDate}`
    );
  const parsed = new Date(bodyValueDate);
  return parsed;
};

export const dateSchema = z.preprocess(dateStringToDate, z.date());
