import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './operations/auth/auth.module';
import { UsersModule } from './operations/users/users.module';
import { UsersService } from './operations/users/users.service';
import { AuthService } from './operations/auth/auth.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule],
  providers: [UsersService, AuthService],
})
export class AppModule {}
