import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose from "mongoose";
import { Assessment } from "src/assessments/entities/assessment.entity";
import { Attendance } from "src/attendance/entities/attendance.entity";
import { Work } from "src/work/entities/work.entity";


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
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Work.name }] }))
  work: Work[];
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Attendance.name }] }))
  attendance: Attendance;
  
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);