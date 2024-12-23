import AppError from '#utils/appErrors.js';
import accessServiceClient from '../../accessServiceClient.js';

const login = (req, res, next) => {
  const { email, password } = req.body;

  accessServiceClient
    .post('/login', { email, password })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      const { response } = error;
      if (response) {
        return res.status(response.status).json(response.data);
      }

      return next(
        new AppError(error?.details ?? 'Algo salio mal', error.code ?? 500),
      );
    });
};

const logout = (req, res, next) => {
  accessServiceClient
    .post('/logout', { token: req.token })
    .then((response) => {
      res.status(response.status).json(response.data ?? '');
    })
    .catch((error) => {
      const { response } = error;
      if (response) {
        return res.status(response.status).json(response.data);
      }

      return next(
        new AppError(error?.details ?? 'Algo salio mal', error.code ?? 500),
      );
    });
};

const register = (req, res, next) => {
  const authClient = req.app.locals.authClient;
  const {
    name,
    firstLastName,
    secondLastName,
    rut,
    email,
    careerId,
    password,
    confirmPassword,
  } = req.body;

  authClient.Register(
    {
      name,
      firstLastName,
      secondLastName,
      rut,
      email,
      careerId,
      password,
      confirmPassword,
    },
    (error, response) => {
      if (error) {
        return next(
          new AppError(error?.details ?? 'Algo salio mal', error.code),
        );
      }

      res.status(201).json(response);
    },
  );
};

const updatePassword = (req, res, next) => {
  const authClient = req.app.locals.authClient;
  const { id } = req.user.data;
  const { oldPassword, newPassword, confirmNewPassword } = req.body;

  authClient.UpdatePassword(
    { userId: id, oldPassword, newPassword, confirmNewPassword },
    (error, response) => {
      if (error) {
        return next(
          new AppError(error?.details ?? 'Algo salio mal', error.code),
        );
      }
      res.status(204).json('');
    },
  );
};

export default {
  login,
  register,
  updatePassword,
  logout,
};
