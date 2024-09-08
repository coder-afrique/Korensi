/// <reference types="node" />

import express, { Express, Request, Response } from 'express';
import userRoutes from './routes/users';
import { logger } from './middleware/logger';
import connectDB from './db/connection';
import authRoutes from './routes/auth';

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
