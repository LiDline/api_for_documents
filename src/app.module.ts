import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './operations/auth/auth.module';
import { TokenMiddleware } from './app.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    // PatientsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude(
        { path: 'auth/signin', method: RequestMethod.GET },
        { path: 'auth/signin-device', method: RequestMethod.GET },
        { path: 'auth/create-admin', method: RequestMethod.POST },
      )
      .forRoutes
      // AnalyticsController,
      ();
  }
}
