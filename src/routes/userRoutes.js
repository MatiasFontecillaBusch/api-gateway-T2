import express from 'express';
import userController from '#services/userService.js';
import { authMiddleware } from '#middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.route('/profile').get(userController.getUserProfile);
router.put('/update-profile', userController.updateUserProfile);
router
  .route('/my-progress')
  .get(userController.getUserProgress)
  .patch(userController.updateUserProgress);

export default router;
