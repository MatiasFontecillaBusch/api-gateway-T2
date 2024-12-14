import { cleanObject } from '#utils/cleanObject.js';

const getAllUsers = (req, res, next) => {
  const usersClient = req.app.locals.usersClient;

  usersClient.GetAll({}, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response.users);
  });
};

const getUserProfile = (req, res, next) => {
  const { id } = req.user.data;
  console.log(id);
  const usersClient = req.app.locals.usersClient;

  usersClient.Profile({ id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response);
  });
};

const updateUserProfile = (req, res, next) => {
  const usersClient = req.app.locals.usersClient;
  const { id } = req.user.data;
  const { name, firstLastName, secondLastName } = req.body;

  usersClient.UpdateProfile(
    { id, name, firstLastName, secondLastName },
    (error, response) => {
      if (error) {
        return next(error);
      }

      const cleanResponse = cleanObject(response);
      res.status(200).json(cleanResponse);
    },
  );
};

const getUserProgress = (req, res, next) => {
  const { id } = req.user.data;
  const userClient = req.app.locals.usersClient;

  userClient.GetProgress({ id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response.progress);
  });
};

const updateUserProgress = (req, res, next) => {
  const userClient = req.app.locals.usersClient;
  const { id: userId } = req.user.data;
  const { addSubjects, removeSubjects } = req.body;

  userClient.UpdateProgress(
    { userId, addSubjects, removeSubjects },
    (error, response) => {
      if (error) {
        return next(error);
      }
      res.status(204).json('');
    },
  );
};

export default {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  getUserProgress,
  updateUserProgress,
};
