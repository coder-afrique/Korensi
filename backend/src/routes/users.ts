import express from 'express';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'Protected users route' });
});

export default router;
