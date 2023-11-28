import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Server is listening on port 3000');
  /* eslint-enable no-console */
});
