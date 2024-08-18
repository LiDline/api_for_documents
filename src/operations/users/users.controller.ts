import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { URL_OBJECT } from 'src/CONST';
import { AboutMeDto, CreateUsersDto } from './users.dto';
import errorResponse from 'src/generalMethods/errorResponse';
import { IdSchema } from 'src/generalValidations/utils';
import { AboutMe, CreateNewUsers, GetAllUsersRequest } from './users.interface';
import { GetAllUsersRequestSchema } from './validation/aboutMeSchema';

@Controller(URL_OBJECT.users.first)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(URL_OBJECT.users.additional.createUsers)
  async createUsers(
    @Body()
    input: CreateUsersDto,
  ): Promise<PromiseSettledResult<CreateNewUsers>[]> {
    const res = await this.usersService.createUsers(input.body, input.id);

    return res;
  }

  @Delete(URL_OBJECT.users.additional.deleteUser + '/:id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    errorResponse(Number(id), IdSchema, 'Wrong id');

    await this.usersService.deleteUser(Number(id));
  }

  @Get(URL_OBJECT.users.additional.aboutMe)
  async aboutMe(
    @Body()
    input: AboutMeDto,
  ): Promise<AboutMe> {
    const res = await this.usersService.aboutMe(input.id);

    return res;
  }

  @Get(URL_OBJECT.users.additional.getAllUsers)
  async getAllUsers(
    @Query('offset') offset: string,
    @Query('limit') limit: string,
  ): Promise<AboutMe[]> {
    const params: GetAllUsersRequest = errorResponse(
      {
        offset: Number(offset),
        limit: Number(limit),
      },
      GetAllUsersRequestSchema,
      'Wrong params',
    );

    const res = await this.usersService.getAllUsers(params);

    return res;
  }
}
