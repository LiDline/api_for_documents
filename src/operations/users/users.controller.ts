import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from './users.service';
import { URL_OBJECT } from 'src/CONST';

@Controller(URL_OBJECT.users.first)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(URL_OBJECT.users.additional.createUsers)
  healthcheck(@Res() res: Response) {
    return res.status(200).send('ok');
  }
}
