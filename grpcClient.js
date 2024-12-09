import grpc from '@grpc/grpc-js';
import { loadProto } from '#utils/loadProto.js';
import dotenv from 'dotenv';

dotenv.config();

const userProto = loadProto('user');

if (!userProto.UserService) {
  throw new Error('UserService no está definido en userProto');
}

const userClient = new userProto.UserService(
  process.env.USER_SERVICE_URL,
  grpc.credentials.createInsecure(),
);

export { userClient };
