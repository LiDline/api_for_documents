import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import type { Login, LoginResponse, UserType } from './auth.interface';

import { UsersService } from '../users/users.service';
import { JWT_CONSTANTS, USER_TYPE } from 'src/CONST';
import { TokenPayload } from 'src/middleware/interfaces.middleware';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

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

      return {
        access_token: this.jwtService.sign(payload, {
          secret: JWT_CONSTANTS.secret,
          expiresIn: JWT_CONSTANTS.expiresIn,
        }),
      };
    }

    throw new UnauthorizedException();
  }
}
