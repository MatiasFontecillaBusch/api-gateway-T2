import { loadProto } from '#utils/loadProto.js';
import { credentials } from '@grpc/grpc-js';

export const loadClients = (app) => {
  const userProto = loadProto('user');
  app.locals.usersClient = new userProto.UserService(
    process.env.USERS_SERVICE_URL,
    credentials.createInsecure(),
  );

  const authProto = loadProto('auth');
  app.locals.authClient = new authProto.AuthService(
    process.env.USERS_SERVICE_URL,
    credentials.createInsecure(),
  );

  const careersProto = loadProto('careers');
  app.locals.careersClient = new careersProto.Careers(
    process.env.CAREERS_SERVICE_URL,
    credentials.createInsecure(),
  );

  const subjectRelationshipsProto = loadProto('subjectRelationships');
  app.locals.subjectRelationshipsClient =
    new subjectRelationshipsProto.SubjectRelationships(
      process.env.CAREERS_SERVICE_URL,
      credentials.createInsecure(),
    );

  const subjectsProto = loadProto('subjects');
  app.locals.subjectsClient = new subjectsProto.Subjects(
    process.env.CAREERS_SERVICE_URL,
    credentials.createInsecure(),
  );
};
