import { Module } from '@nestjs/common';
import { ClassUserService } from './class_user.service';
import { ClassUserController } from './class_user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ClassUser, ClassUserSchema} from "./schema/class_user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClassUser.name, schema: ClassUserSchema }]),
  ],
  controllers: [ClassUserController],
  providers: [ClassUserService]
})
export class ClassUserModule {}
