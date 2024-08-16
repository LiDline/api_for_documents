import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './operations/auth/auth.module';
import { UsersModule } from './operations/users/users.module';
import { HealthcheckModule } from './operations/healthchek/healthcheck.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, HealthcheckModule],
})
export class AppModule {}
