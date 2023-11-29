import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import moduleRouter from './routes/module.route';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/modules', moduleRouter);

export default app;
