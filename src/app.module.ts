import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { ThrottlerModule } from '@nestjs/throttler';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ClassModule } from './class/class.module';
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "./roleGuards/roles.guard";
import { ClassUserModule } from './class_user/class_user.module';

dotenv.config();

const URL = process.env.DATABASE_URL;

@Module({
  imports: [
    MongooseModule.forRoot(URL),
    UsersModule,
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ClassModule,
    ClassUserModule,
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {}
