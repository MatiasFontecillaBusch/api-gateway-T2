import accessServiceClient from '../../accessServiceClient.js';

const login = (req, res, next) => {
  const { email, password } = req.body;

  accessServiceClient
    .post('/login', { email, password })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      next(error);
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
        return next(error);
      }

      res.status(201).json(response);
    },
  );
};

const updatePassword = (req, res, next) => {
  const authClient = req.app.locals.authClient;
  const { id } = req.user.data;
  const { oldPassword, newPassword } = req.body;

  authClient.UpdatePassword(
    { userId: id, oldPassword, newPassword },
    (error, response) => {
      if (error) {
        return next(error);
      }
      res.status(200).json(response);
    },
  );
};

export default {
  login,
  register,
  updatePassword,
};
