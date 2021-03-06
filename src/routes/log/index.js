import { Router } from 'express';
import Controller from '../../app/controller/Log';

const routes = Router();
const endpoint = '/logger';


routes.post(`${endpoint}/find`, Controller.show);

export default routes;