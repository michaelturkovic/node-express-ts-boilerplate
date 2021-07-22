import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorMiddleware, loggerMiddleware } from './api/middlewares';

class App {
  public app: Application;

  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(loggerMiddleware);
  }

  private initRoutes() {
    this.app.get('/', (req, res, next) => res.send('Hello World'));
  }

  private initErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public listen() {
    this.app.listen(this.port, () => console.log(`Server started on port: ${this.port}`));
  }
}

export default App;
