import subjectRelationshipsStub from '#services/subjectRelationshipsService.js';
import catchAsync from '#utils/catchAsync.js';

// Get Post-Requisites Map
export const getPostRequisitesMap = catchAsync(async (req, res, next) => {
  subjectRelationshipsStub.GetPostRequisitesMap({}, (error, response) => {
    if (error) {
      return next(error);
    }

    return res.status(200).json({ status: 'success', data: response.data });
  });
});

// Get Pre-Requisites Map
export const getPreRequisitesMap = catchAsync(async (req, res, next) => {
  subjectRelationshipsStub.GetPreRequisitesMap({}, (error, response) => {
    if (error) {
      return next(error);
    }

    return res.status(200).json({ status: 'success', data: response.data });
  });
});

// Get Pre-Requisites/objects Map
export const getPreRequisitesMapObjects = catchAsync(async (req, res, next) => {
  subjectRelationshipsStub.GetAllSubjectRelationships({}, (error, response) => {
    if (error) {
      return next(error);
    }

    return res
      .status(200)
      .json({ status: 'success', data: response.subjectRelationships });
  });
});
