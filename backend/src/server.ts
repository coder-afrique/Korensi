/// <reference types="node" />

import express, { Express, Request, Response } from 'express';
import userRoutes from './routes/users';
import { logger } from './middleware/logger';
import connectDB from './db/connection';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});