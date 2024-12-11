import { Router } from 'express';
import { getAllCareers } from '#services/careersService.js';
import { authMiddleware } from '#middleware/authMiddleware.js';

const careersRouter = Router();

careersRouter.use(authMiddleware);
careersRouter.get('/', getAllCareers);

export default careersRouter;
