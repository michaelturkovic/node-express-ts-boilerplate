class BaseException extends Error {
  public name: string;

  public statusCode: number;

  constructor(name: string, statusCode: number, message: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;

    Error.captureStackTrace(this);
  }
}

export default BaseException;
