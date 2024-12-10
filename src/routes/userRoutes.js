import express from 'express';
import userController from '#services/userService.js';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserProfile);
router.patch('/:id', userController.updateUserProfile);
router.get('/:id/progress', userController.getUserProgress);
router.patch('/:id/progress', userController.updateUserProgress);

export default router;
