import grpc from '@grpc/grpc-js';
import { loadProto } from '#utils/loadProto.js';
import dotenv from 'dotenv';

dotenv.config();

const userProto = loadProto('user');
const authProto = loadProto('auth');

const userClient = new userProto.UserService(
  process.env.USER_SERVICE_URL,
  grpc.credentials.createInsecure(),
);

const authClient = new authProto.AuthService(
  process.env.USER_SERVICE_URL,
  grpc.credentials.createInsecure(),
);

export { userClient, authClient };
