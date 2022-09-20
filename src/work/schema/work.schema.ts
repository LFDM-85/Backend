import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

export type WorkDocument = Work & Document
@Schema()

export class Work {
  @Transform(({ value }) => value.toString())
  _id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work)