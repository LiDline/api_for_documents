import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { LoginResponse } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() input: LoginDto): Promise<LoginResponse> {
    const res = await this.authService.login(input);

    return res;
  }
}
