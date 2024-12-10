import express from 'express';
import authController from '#services/authService.js';

const router = express.Router();

router.post('/register', authController.register);
router.put('/update-password', authController.updatePassword);

export default router;
