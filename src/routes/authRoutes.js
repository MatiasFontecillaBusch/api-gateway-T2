import express from 'express';
import authController from '#services/authService.js';
import { authMiddleware } from '#middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authController.login);
router.use(authMiddleware);
router.post('/register', authController.register);
router.put('/update-password', authController.updatePassword);

export default router;
