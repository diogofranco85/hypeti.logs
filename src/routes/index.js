import { Router } from 'express'

import user from './user';
import password from './password';
import log from './log';

const routes = Router();

routes.use(
    user,
    password,
    log
);

export default routes;