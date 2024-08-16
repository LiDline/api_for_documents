import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// import refreshToken from './middleware/refreshToken';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
