import { Router } from 'express';
import { getAllCareers } from '#controller/careersController.js';

const careersRouter = Router();

careersRouter.get('/', getAllCareers);

export default careersRouter;
