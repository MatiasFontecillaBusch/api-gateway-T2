import express from 'express';
import helmet from 'helmet';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import compression from 'compression';
import morgan from 'morgan';
import AppError from '#utils/appErrors.js';
import globalErrorMiddleware from '#middleware/globalErrorMiddleware.js';

const app = express();

app.use(helmet());

// 1) GLOBAL MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(ExpressMongoSanitize());
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);
app.use(compression());

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.all('*', (req, res, next) => {
  next(
    new AppError(`Ruta no encontrada ${req.originalUrl} no encontrada`, 404),
  );
});

app.use(globalErrorMiddleware);

export default app;
