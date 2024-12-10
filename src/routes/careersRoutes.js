import { Router } from 'express';
import { getAllCareers } from '#services/careersService.js';

const careersRouter = Router();

careersRouter.get('/', getAllCareers);

export default careersRouter;
