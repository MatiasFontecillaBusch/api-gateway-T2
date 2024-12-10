import { Router } from 'express';
import {
  getAllSubjects,
  getPostRequisitesMap,
  getPreRequisitesMap,
  getPreRequisitesMapObjects,
} from '#services/subjectRelationshipsService.js';

const subjectsRouter = Router();

subjectsRouter.get('/', getAllSubjects);
subjectsRouter.get('/prerequisites-map', getPostRequisitesMap);
subjectsRouter.get('/postrequisites-map', getPreRequisitesMap);
subjectsRouter.get('/prerequisites-map/objects', getPreRequisitesMapObjects);

export default subjectsRouter;
