import { Router } from 'express';
import ProductControllers from '../controllers/ProductController';

const routes = new Router();
routes.get('/product', ProductControllers.index);
routes.get('/product/:id', ProductControllers.show);
routes.post('/product', ProductControllers.store);
routes.put('/product/:id', ProductControllers.update);
// routes.delete('/product/:id', ProductControllers.delete);

export default routes;
