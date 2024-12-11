import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import compression from 'compression';
import morgan from 'morgan';
import AppError from '#utils/appErrors.js';
import globalErrorMiddleware from '#middleware/globalErrorMiddleware.js';
import userRouter from '#routes/userRoutes.js';
import authRouter from '#routes/authRoutes.js';
import { loadClients } from './grpcClient.js';
import apiGatewayMiddleware from '#middleware/apiGatewayMiddleware.js';
import subjectsRouter from '#routes/subjectsRoutes.js';
import careersRouter from '#routes/careersRoutes.js';

dotenv.config({ path: './.env' });

const app = express();

app.use(helmet());

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

loadClients(app);


app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/subjects', subjectsRouter);
app.use('/careers', careersRouter);

app.use(apiGatewayMiddleware);

app.all('*', (req, res, next) => {
  next(
    new AppError(`Ruta no encontrada ${req.originalUrl} no encontrada`, 404),
  );
});

app.use(globalErrorMiddleware);

export default app;
