import catchAsync from '#utils/catchAsync.js';

export const getAllCareers = catchAsync(async (req, res, next) => {
  req.app.locals.careersClient.GetAllCareers({}, (error, response) => {
    if (error) {
      return next(error);
    }

    return res.status(200).json({ status: 'success', data: response.careers });
  });
});
