import { Module } from '@nestjs/common';
import { AssessmentsService } from './assessments.service';
import { AssessmentsController } from './assessments.controller';
import { LecturesModule } from 'src/lectures/lectures.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Assessment, AssessmentSchema } from './schema/assessments.schema';

@Module({
  imports: [
    LecturesModule,
    MongooseModule.forFeature([{name: Assessment.name, schema: AssessmentSchema}]),
  ],
  controllers: [AssessmentsController],
  providers: [AssessmentsService],
})
export class AssessmentsModule {}
