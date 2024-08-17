import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import type { Login, LoginResponse, UserType } from './auth.interface';

import { UsersService } from '../users/users.service';
import { JWT_CONSTANTS, USER_TYPE } from 'src/CONST';
import { TokenPayload } from 'src/middleware/interfaces.middleware';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(user: Login): Promise<LoginResponse> {
    const userFromBd = await this.usersService.findOne(
      user.username,
      Buffer.from(user.password).toString('base64'),
    );

    if (userFromBd) {
      const userType = userFromBd!.user_type!.name! as UserType;

      const payload: TokenPayload = {
        username: user.username,
        role: USER_TYPE[userType],
      };

      const res = jwt.sign(payload, JWT_CONSTANTS.secret, {
        expiresIn: JWT_CONSTANTS.expiresIn,
      });

      return {
        access_token: res,
      };
    }

    throw new UnauthorizedException();
  }
}
