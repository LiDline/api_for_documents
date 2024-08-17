import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { URL_OBJECT } from 'src/CONST';

@Controller(URL_OBJECT.healthcheck.first)
export class HealthcheckController {
  @Get('/')
  healthcheck(@Res() res: Response) {
    return res.status(200).send('ok');
  }
}
