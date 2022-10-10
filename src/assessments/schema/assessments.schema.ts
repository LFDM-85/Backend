import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export type AssessmentDocument = Assessment & Document;

@Schema()
export class Assessment {
  _id: string;
  assessmentValue: number;
  userId: string;

  lectureId: string;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
