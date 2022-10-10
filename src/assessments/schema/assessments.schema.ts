import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose from "mongoose";
import { Lecture } from "src/lectures/schema/lectures.schema";
import { Users } from "src/users/schema/users.schema";

export type AssessmentDocument = Assessment & Document;

@Schema()
export class Assessment {
  @Transform(({ value }) => value.toString())
  _id: string;
  @Prop()
  assessmentValue: number;
  @Prop(({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }))
  user: Users;

  @Prop(({ type: mongoose.Schema.Types.ObjectId, ref: Lecture.name }))
  lecture: Lecture;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment)