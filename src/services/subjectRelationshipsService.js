import dotenv from 'dotenv';
import { credentials } from '@grpc/grpc-js';
import { loadProto } from '#utils/loadProto.js';

dotenv.config({ path: './.env' });

const subjectRelationshipsProto = loadProto('subjectRelationships');
const subjectRelationshipsStub =
  new subjectRelationshipsProto.SubjectRelationships(
    process.env.CAREERS_URL,
    credentials.createInsecure(),
  );

export default subjectRelationshipsStub;
