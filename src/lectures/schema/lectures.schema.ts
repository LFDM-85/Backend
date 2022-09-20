import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose from "mongoose";
import { Assessment } from "src/assessments/entities/assessment.entity";

export type LectureDocument = Lecture & Document
@Schema()
export class Lecture {
  @Transform(({ value }) => value.toString())
    _id: string
  @Prop()
  summary: string;
   @Prop()
  description: string;
  @Prop()
  finished: boolean;
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Assessment.name }] }))
  assessment: Assessment
  
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);