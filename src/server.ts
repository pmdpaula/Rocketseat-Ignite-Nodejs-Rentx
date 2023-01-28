import express, {
  NextFunction,
  ErrorRequestHandler,
  Request,
  Response,
} from 'express';
import 'express-async-errors';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import 'reflect-metadata';

import { router } from './routes';

import swaggerFile from './swagger.json';

import './database';
import './shared/container';
import { AppError } from './errors/AppError';

const app = express();

const port = 3333;

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error: ${err.message}`,
    });
  },
);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
