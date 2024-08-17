import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { URL_OBJECT } from 'src/CONST';
import { CreateUsersDto } from './users.dto';

@Controller(URL_OBJECT.users.first)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(URL_OBJECT.users.additional.createUsers)
  async createUsers(
    @Body()
    input: CreateUsersDto,
  ): Promise<any> {
    const res = await this.usersService.createUsers(input.body, input.id);

    return res;
  }
}
