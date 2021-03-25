import { Router } from 'express';
import DevolutionControllers from '../controllers/DevolutionController';

const routes = new Router();
routes.get('/devolution', DevolutionControllers.index);
routes.get('/devolution/:id', DevolutionControllers.show);
routes.post('/devolution', DevolutionControllers.store);

export default routes;
