import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() input: LoginDto) {
    return this.authService.login(input);
  }

  // @Get('signin')
  // async signIn(@Query() query: SignInDto): Promise<SignInResponse> {
  //   const res = await this.authService.signIn(query.username, query.pass);

  //   return res;
  // }

  // @Post('create-user')
  // async createAdmin(
  //   @Body()
  //   input: undefined, // : Promise<CreateUserResponse>
  // ) {
  //   const res = await this.authService.createUser();

  //   return res;
  // }

  // @Post('change-password')
  // async resetPassword(
  //   @Body()
  //   input: ChangePasswordDto,
  // ): Promise<OperationOutcomeOk> {
  //   const res = await this.authService.changePasswordPractitioner(
  //     input.body.additionalValues,
  //     input.body.values,
  //     input.authorization,
  //   );

  //   return res;
  // }
}
