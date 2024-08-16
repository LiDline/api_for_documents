import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
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
