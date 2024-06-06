import express from 'express';
import {handler} from '../build/handler.js'
import {default as Assets} from './router/assets.js';
import {config} from 'dotenv';

config();

const app = express();

app.use('/ex', Assets);

app.use(handler);

app.listen(process.env.PORT|| 3000, () => {console.log(`express server is running on port ${process.env.PORT|| 3000}`)});