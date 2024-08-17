import {
  ForbiddenException,
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

    if (!tokenPayload) {
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

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.body.role != 'admin') {
      throw new ForbiddenException();
    }

    next();
  }
}
