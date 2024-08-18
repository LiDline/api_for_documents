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
import { URL_OBJECT } from './CONST';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, HealthcheckModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude({
        path: URL_OBJECT.auth.first + URL_OBJECT.auth.additional.login,
        method: RequestMethod.POST,
      })
      .forRoutes(UsersController);

    consumer
      .apply(AdminMiddleware)
      .exclude(
        {
          path: URL_OBJECT.users.first + URL_OBJECT.users.additional.aboutMe,
          method: RequestMethod.GET,
        },
        {
          path: URL_OBJECT.users.first + URL_OBJECT.users.additional.updateUser,
          method: RequestMethod.POST,
        },
      )
      .forRoutes(UsersController);
  }
}
