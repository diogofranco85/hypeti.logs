import { Router } from 'express';
import Controller from '../../app/controller/User';

const routes = Router();
const endpoint = '/user';

routes.post(`${endpoint}/create`, Controller.create);
routes.get(`${endpoint}/:id/find`, Controller.find);
routes.put(`${endpoint}/:id/edit`, Controller.update);


export default routes;