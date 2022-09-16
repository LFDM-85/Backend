import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document} from "mongoose";

export type ClassDocument = Class & Document
@Schema()
export class Class {
  @Prop()
  nameClass: string;
  @Prop()
  open: boolean
}

export const ClassSchema = SchemaFactory.createForClass((Class))

