import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose from "mongoose";
import { Users } from "src/users/schema/users.schema";

export type AssessmentDocument = Assessment & Document;

@Schema()
export class Assessment {
  @Transform(({ value }) => value.toString())
  _id: string;
  @Prop()
  assessmentValue: number;
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }] }))
  user: Users;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment)