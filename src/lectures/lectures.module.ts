import { Module } from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { LecturesController } from './lectures.controller';
import { ClassModule } from 'src/class/class.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Lecture, LectureSchema } from './schema/lectures.schema';

@Module({
  imports: [
    ClassModule,
    MongooseModule.forFeature([{ name: Lecture.name, schema: LectureSchema }]),
  ],
  controllers: [LecturesController],
  providers: [LecturesService],
})
export class LecturesModule {}
