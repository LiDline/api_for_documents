import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import parseJWTPayload from './middleware/parseJWTPayload';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization || !req.headers.authorization.length) {
      throw new UnauthorizedException();
    }

    const tokenPayload = parseJWTPayload(req.headers.authorization);

    if (Date.now() >= (tokenPayload.exp as number) * 1000) {
      throw new UnauthorizedException();
    }

    const body = req.body;
    const modifiedQuery = {
      body,
      role: tokenPayload.role,
    };

    req.body = modifiedQuery;

    next();
  }
}
