import { Router } from 'express';
import {
  getAllSubjects,
  getPostRequisitesMap,
  getPreRequisitesMap,
  getPreRequisitesMapObjects,
} from '#services/subjectRelationshipsService.js';
import { authMiddleware } from '#middleware/authMiddleware.js';

const subjectsRouter = Router();

subjectsRouter.use(authMiddleware);
subjectsRouter.get('/', getAllSubjects);
subjectsRouter.get('/prerequisites-map', getPostRequisitesMap);
subjectsRouter.get('/postrequisites-map', getPreRequisitesMap);
subjectsRouter.get('/prerequisites-map/objects', getPreRequisitesMapObjects);

export default subjectsRouter;
