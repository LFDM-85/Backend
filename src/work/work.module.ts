import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { LecturesModule } from 'src/lectures/lectures.module';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './schema/work.schema';

@Module({
  imports: [
    LecturesModule,
    UsersModule,
    MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]),
  ],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
