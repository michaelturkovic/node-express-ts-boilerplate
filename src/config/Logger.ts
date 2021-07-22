import winston, { createLogger, transports, format, Logform } from 'winston';

class Logger {
  private logger: winston.Logger;

  constructor() {
    const prodTransport = new transports.File({
      filename: 'logs/error.log',
      level: 'error',
    });
    const devTransport = new transports.Console();

    this.logger = createLogger({
      level: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf((info: Logform.TransformableInfo) => {
          const { timestamp, level, message } = info;

          return `${timestamp} [${level}]: ${message}`;
        }),
        // format.json()
      ),
      transports: [
        process.env.NODE_ENV === 'development' ? devTransport : prodTransport,
      ],
    });
  }

  debug(msg: any) {
    this.logger.debug(msg);
  }

  info(msg: any) {
    this.logger.info(msg);
  }

  warn(msg: any) {
    this.logger.warn(msg);
  }

  error(msg: any) {
    this.logger.error(msg);
  }
}

export const logger = new Logger();
