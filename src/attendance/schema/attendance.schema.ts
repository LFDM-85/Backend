import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance {
  @Transform(({ value }) => value.toString())
  _id: string;
  @Prop()
  attendance: boolean;
  @Prop()
  validation: boolean;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance)