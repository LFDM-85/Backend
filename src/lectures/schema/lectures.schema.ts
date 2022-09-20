import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";

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
  
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);