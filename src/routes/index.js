import { Router } from 'express'

import user from './user';
import password from './password';
import log from './log';
import app from './api';

const routes = Router();

routes.use(
    user,
    password,
    log,
    app
);

export default routes;