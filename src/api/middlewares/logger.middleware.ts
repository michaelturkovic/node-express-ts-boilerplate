import { Request, Response, NextFunction } from 'express';
import { logger } from '../../config';

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.info(`Request: ${req.method} ${req.path}`);
  next();
};
