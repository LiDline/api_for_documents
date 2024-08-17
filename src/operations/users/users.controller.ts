import { Body, Controller, Delete, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { URL_OBJECT } from 'src/CONST';
import { CreateUsersDto } from './users.dto';
import errorResponse from 'src/generalMethods/errorResponse';
import { IdSchema } from 'src/generalValidations/utils';

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

  @Delete(URL_OBJECT.users.additional.deleteUser + '/:id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    errorResponse(Number(id), IdSchema, 'Wrong id');

    await this.usersService.deleteUser(Number(id));
  }
}
