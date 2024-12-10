import grpc from '@grpc/grpc-js';
import { loadProto } from '#utils/loadProto.js';
import dotenv from 'dotenv';

dotenv.config();

export const loadClients = (app) => {
  const userProto = loadProto('user');
  app.locals.usersClient = new userProto.UserService(
    process.env.USER_SERVICE_URL,
    grpc.credentials.createInsecure(),
  );

  const authProto = loadProto('auth');
  app.locals.authClient = new authProto.AuthService(
    process.env.USER_SERVICE_URL,
    grpc.credentials.createInsecure(),
  );
};
