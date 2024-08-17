import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { LoginResponse } from './auth.interface';
import { URL_OBJECT } from 'src/CONST';

@Controller(URL_OBJECT.auth.first)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(URL_OBJECT.auth.additional.login)
  async login(@Body() input: LoginDto): Promise<LoginResponse> {
    const res = await this.authService.login(input);

    return res;
  }
}
