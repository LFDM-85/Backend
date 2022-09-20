import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose, { Document} from "mongoose";
import { Lecture } from "src/lectures/entities/lecture.entity";
import { Users } from "src/users/schema/users.schema";

export type ClassDocument = Class & Document
@Schema()
export class Class {
  @Transform(({ value }) => value.toString())
    _id: string
  @Prop()
  nameClass: string;
  @Prop()
  open: boolean;
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }] }))
  user: Users[];
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Lecture.name }] }))
  lectures: [Lecture];
}

export const ClassSchema = SchemaFactory.createForClass(Class)

