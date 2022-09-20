import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose, { Document } from "mongoose";
import { Class } from "src/class/schema/class.schema";

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
   @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Class.name }] }))
  class: Class
}

export const LectureSchema = SchemaFactory.createForClass(Lecture)