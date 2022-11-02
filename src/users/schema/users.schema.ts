import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose, { Document } from 'mongoose';
import { Class } from "src/class/schema/class.schema";
import { Assessment } from "src/assessments/schema/assessments.schema";
import { Attendance } from "src/attendance/schema/attendance.schema";
import { Work } from "src/work/schema/work.schema";

export type UserDocument = Users & Document;
@Schema()
export class Users {
  @Transform(({ value }) => value.toString())
    _id: string
  @Prop()
  name: string;
   @Prop()
  image: string;
  @Prop({require: true, unique: true})
  email: string
  @Prop({require: true})
  password: string
  @Prop()
  roles: string[]
  @Prop()
  isValidated: boolean;
  @Prop()
  refreshToke: string
  @Prop({ type:[{ type: mongoose.Schema.Types.ObjectId, ref: Class.name}]})
  classes: [Class]
}

export const UsersSchema = SchemaFactory.createForClass(Users)

