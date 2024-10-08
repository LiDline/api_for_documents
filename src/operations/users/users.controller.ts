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
import { CUSTOM_ERRORS, URL_OBJECT } from 'src/CONST';
import { CreateUsersDto, UpdateUserDto } from './users.dto';
import errorResponse from 'src/generalMethods/errorResponse';
import { IdSchema } from 'src/generalValidations/utils';
import {
  AboutMe,
  CreateNewUsers,
  FindUserByNameRequest,
  GetAllUsersRequest,
} from './users.interface';
import {
  FindUserByNameRequestSchema,
  GetAllUsersRequestSchema,
} from './validation/aboutMeSchema';
import { MiddlewareDto } from 'src/generalValidations/InputDto';

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
  async deleteUser(
    @Param('id') id: string,
    @Body()
    input: MiddlewareDto,
  ): Promise<void> {
    errorResponse(Number(id), IdSchema, CUSTOM_ERRORS.wrongId);

    await this.usersService.deleteUser(Number(id), input.id);
  }

  // Исключая удалённые документы
  @Get(URL_OBJECT.users.additional.aboutMe)
  async aboutMe(
    @Body()
    input: MiddlewareDto,
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
      CUSTOM_ERRORS.wrongParams,
    );

    const res = await this.usersService.getAllUsers(params);

    return res;
  }

  @Get(URL_OBJECT.users.additional.findUserByName)
  async findUser(
    @Query('name') name: string,
    @Query('offset') offset: string,
    @Query('limit') limit: string,
  ): Promise<AboutMe[]> {
    const params: FindUserByNameRequest = errorResponse(
      {
        offset: Number(offset),
        limit: Number(limit),
        name,
      },
      FindUserByNameRequestSchema,
      CUSTOM_ERRORS.wrongParams,
    );

    const res = await this.usersService.findUserByName(params);

    return res;
  }

  @Post(URL_OBJECT.users.additional.updateUser)
  async updateUser(
    @Body()
    input: UpdateUserDto,
  ): Promise<void> {
    await this.usersService.updateUser(input.body, input.id);
  }
}
