import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('healthcheck')
export class HealthcheckController {
  @Get('/')
  healthcheck(@Res() res: Response) {
    return res.status(200).send('ok');
  }
}
