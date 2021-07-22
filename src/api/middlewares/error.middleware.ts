import { Request, Response, NextFunction } from 'express';
import { logger } from '../../config';
import BaseException from '../exceptions/base.exception';

export const errorMiddleware = async (
  err: BaseException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(`Request: ${req.method} ${req.path} ${err.message}`);
  res.status(err.statusCode).json({ message: err.message });
};
