import { Router } from 'express';
import ProductControllers from '../controllers/ProductController';

const routes = new Router();
routes.get('/product', ProductControllers.index);
routes.get('/product/:id', ProductControllers.show);
routes.post('/product', ProductControllers.store);
routes.get('/product/:id', ProductControllers.update);
routes.get('/product/:id', ProductControllers.delete);

export default routes;
