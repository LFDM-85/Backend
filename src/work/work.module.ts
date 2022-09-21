import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { LecturesModule } from 'src/lectures/lectures.module';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './schema/work.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    LecturesModule,
    UsersModule,
    MulterModule.register({ dest: './uploads' }),
    MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]),
  ],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
