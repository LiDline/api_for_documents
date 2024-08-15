import { NestFactory } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ?? 80;
  const app = await NestFactory.create(AppModule);

  // Разрешаем доступ с любого адреса
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  });

  app.useGlobalPipes(new ZodValidationPipe());

  await app.listen(port);

  console.log('----------------------------------------');
  console.log('|           Api for documents          |');
  console.log(
    `|           Version: ${process.env.VERSION ?? '0.0.1'}             |`,
  ); // Выровнял "Version"
  console.log('----------------------------------------');
  console.log('|           Author: LiDline            |');
  console.log('----------------------------------------');
  console.log(`Server is running on http://localhost:${port}`);
}

bootstrap();
