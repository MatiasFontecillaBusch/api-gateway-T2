import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'No se proporcionó un token de autenticación.',
      });
    }

    const response = await axios.post(
      `${process.env.ACCESS_SERVICE_URL}/auth`,
      {
        token,
      },
    );

    req.user = response.data;

    next();
  } catch (error) {
    console.error('Error en la autenticación:', error.message);

    if (error.response && error.response.status === 401) {
      return res.status(401).json({
        status: 'fail',
        message: 'Token inválido o expirado.',
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Error al procesar la autenticación.',
    });
  }
};
