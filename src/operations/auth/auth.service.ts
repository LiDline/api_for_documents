import { Injectable } from '@nestjs/common';

import type { Login, LoginResponse } from './auth.interface';

import login from './service/login';

@Injectable()
export class AuthService {
  async login(user: Login): Promise<LoginResponse> {
    return await login(user);
  }
}
