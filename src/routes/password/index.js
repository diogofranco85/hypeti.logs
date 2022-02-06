import { Router } from 'express';
import Controller from '../../app/controller/Password';

const routes = Router();
const endpoint = '/password';


routes.put(`${endpoint}/:id/update`, Controller.update);

export default routes;