import dotenv from 'dotenv';
import { credentials } from '@grpc/grpc-js';
import { loadProto } from '#utils/loadProto.js';

dotenv.config({ path: './.env' });

const careersProto = loadProto('careers');
const careersStub = new careersProto.Careers(
  process.env.CAREERS_URL,
  credentials.createInsecure(),
);
export default careersStub;
