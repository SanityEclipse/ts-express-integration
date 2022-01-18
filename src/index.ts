import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router as controllerRouter } from './controllers/decorators/Controller';
import './controllers/LoginController';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['cookieString'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('listening on port 3000')
})