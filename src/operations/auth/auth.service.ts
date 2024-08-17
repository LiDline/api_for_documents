import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { JWT_CONSTANTS, USER_TYPE } from 'src/CONST';
import { Login, UserType } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: Login) {
    const userFromBd = await this.usersService.findOne(
      user.username,
      Buffer.from(user.password).toString('base64'),
    );

    if (userFromBd) {
      const userType = userFromBd!.user_type!.name! as UserType;

      const payload = { username: user.username, role: USER_TYPE[userType] };

      return {
        access_token: this.jwtService.sign(payload, {
          secret: JWT_CONSTANTS.secret,
        }),
      };
    }

    throw new UnauthorizedException();
  }
}
