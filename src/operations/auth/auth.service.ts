import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { USER_TYPE } from 'src/CONST';
import { Login, UserType, ValidateUser } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<ValidateUser | null> {
    const user = await this.usersService.findOne(username);

    if (user?.password === Buffer.from(pass).toString('base64')) {
      const userType = user!.user_type!.name! as UserType;

      return { username, role: USER_TYPE[userType] };
    }

    return null;
  }

  async login(user: Login) {
    const payload = { username: user.username };

    console.log(payload);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
