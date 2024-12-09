import { cleanObject } from '../utils/cleanObject.js';

const register = (req, res, next) => {
  const authClient = req.app.locals.authClient;
  const {
    name,
    firstLastName,
    secondLastName,
    rut,
    email,
    careerId,
    roleId,
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
      roleId,
      password,
      confirmPassword,
    },
    (error, response) => {
      if (error) {
        return next(error);
      }

      res.status(201).json(response);
    },
  );
};

const updatePassword = (req, res, next) => {
  const authClient = req.app.locals.authClient;
  const { userId, oldPassword, newPassword } = req.body;

  authClient.UpdatePassword(
    { userId, oldPassword, newPassword },
    (error, response) => {
      if (error) {
        return next(error);
      }
      res.status(200).json(response);
    },
  );
};

export default {
  register,
  updatePassword,
};
