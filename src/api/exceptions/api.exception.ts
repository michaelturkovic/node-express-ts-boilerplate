import { HttpStatusCode } from '../constants';
import BaseException from './base.exception';

class ApiException extends BaseException {
  constructor(
    name: string,
    statusCode = HttpStatusCode.INTERNAL_SERVER,
    message = 'Something went wrong',
  ) {
    super(name, statusCode, message);
  }
}

export default ApiException;
