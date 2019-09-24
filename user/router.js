import { AuthMiddleware } from '../auth';
import { UserController } from './controller';

export const UserRouter = (app) => {
  app.post('/api/v1/users', UserController.create);
  app.post('/api/v1/users/login', UserController.login);
  app.delete('/api/v1/users/me', AuthMiddleware.verifyToken, UserController.delete);
};
