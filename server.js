import dotenv from 'dotenv';
import app from './app.js';

const environments = {
  development: 'Desarrollo',
  production: 'Producción',
};

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Apagando el servidor...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './.env' });

export default app;

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`- Entorno:      ${environments[process.env.NODE_ENV]}`);
  console.log(`- Puerto:       ${port}`);
  console.log(`- URL:          ${process.env.SERVER_URL}:${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Apagando el servidor...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Apagando el servidor.');
  server.close(() => {
    console.log('Servidor apagado!');
  });
});
