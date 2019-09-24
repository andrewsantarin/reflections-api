import express from 'express';
import dotenv from 'dotenv';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { ReflectionRouter } from './reflection';
import { UserRouter } from './user';

dotenv.config();

const app = express();

app.use(express.json());

ReflectionRouter(app, process.env.DATABASE_TYPE === 'db');
UserRouter(app);

app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'YAY! Congratulations! Your first endpoint is working'
  });
});

app.listen(3000);
console.log('app running on port: ', 3000);
