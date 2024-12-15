import express from 'express';
import authController from '#services/authService.js';
import { authMiddleware } from '#middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.use(authMiddleware);
router.delete('/logout', authController.logout);
router.put('/update-password', authController.updatePassword);

export default router;
