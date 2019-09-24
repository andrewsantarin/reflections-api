import { AuthMiddleware } from '../auth';
import { ReflectionController } from './controller';

export const ReflectionRouter = (app) => {
  app.post('/api/v1/reflections', AuthMiddleware.verifyToken, ReflectionController.create);
  app.get('/api/v1/reflections', AuthMiddleware.verifyToken, ReflectionController.getAll);
  app.get('/api/v1/reflections/:id', AuthMiddleware.verifyToken, ReflectionController.getOne);
  app.put('/api/v1/reflections/:id', AuthMiddleware.verifyToken, ReflectionController.update);
  app.delete('/api/v1/reflections/:id', AuthMiddleware.verifyToken, ReflectionController.delete);
};
