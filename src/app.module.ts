import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './operations/auth/auth.module';
import { UsersModule } from './operations/users/users.module';
import { HealthcheckModule } from './operations/healthchek/healthcheck.module';
import { AdminMiddleware, TokenMiddleware } from './app.middleware';
import { UsersController } from './operations/users/users.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, HealthcheckModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude({ path: 'auth/login', method: RequestMethod.POST })
      .forRoutes(UsersController);

    consumer.apply(AdminMiddleware).forRoutes(UsersController);
  }
}
