import { cleanObject } from '#utils/cleanObject.js';

const getAllUsers = (req, res, next) => {
  const userClient = req.app.locals.userClient;

  userClient.GetAll({}, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response.users);
  });
};

const getUserProfile = (req, res, next) => {
  const { id } = req.params;
  const userClient = req.app.locals.userClient;

  userClient.Profile({ id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response);
  });
};

const updateUserProfile = (req, res, next) => {
  const userClient = req.app.locals.userClient;
  const { id } = req.params;
  const { name, firstLastName, secondLastName } = req.body;

  userClient.UpdateProfile(
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
  const { id } = req.params;
  const userClient = req.app.locals.userClient;

  userClient.GetProgress({ id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response.progress);
  });
};

const updateUserProgress = (req, res, next) => {
  const userClient = req.app.locals.userClient;
  const { userId, addSubjects, removeSubjects } = req.body;

  userClient.UpdateProgress(
    { userId, addSubjects, removeSubjects },
    (error, response) => {
      if (error) {
        return next(error);
      }
      res.status(200).json(response.progress);
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
