import * as dotenv from 'dotenv';
import App from './app';

dotenv.config();

if (!process.env.PORT) process.exit(1);

const PORT: number = Number(process.env.PORT) || 3000;

const app = new App(PORT);

app.listen();
