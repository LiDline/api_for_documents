import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import parseJWTPayload from './middleware/parseJWTPayload';
// import refreshToken from './middleware/refreshToken';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization || !req.headers.authorization.length) {
      return res.status(400).json('Отсутствует токен авторизации.');
    }
    // if (!req.headers.refresh_token || !req.headers.refresh_token.length) {
    //   return res.status(500).json('Отсутствует refresh Token.');
    // }

    const tokenPayload = parseJWTPayload(req.headers.authorization);
    if (Date.now() >= (tokenPayload.exp as number) * 1000) {
      return res.status(426).json('Токен доступа устарел.');
      // const response = await refreshToken(req.headers.refresh_token as string);

      // if (typeof response === 'string') {
      //   return res.status(500).json(response);
      // }
      // (req.headers.authorization = response.newToken),
      //   (req.headers.refresh_token = response.newRefreshToken);
    }

    const body = req.body;
    const modifiedQuery = {
      body,
      authorization: req.headers.authorization,
    };

    req.body = modifiedQuery;

    next();
  }
}
