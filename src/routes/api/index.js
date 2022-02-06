import { Router } from 'express';
import Controller from '../../app/controller/Api';

const routes = Router();
const endpoint = '/apps';

routes.post(`${endpoint}/create`, Controller.create);

export default routes;