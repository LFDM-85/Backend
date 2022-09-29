import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose, { Document} from "mongoose";
import { Assessment } from "src/assessments/entities/assessment.entity";
import { Attendance } from "src/attendance/entities/attendance.entity";
import { Class } from "src/class/schema/class.schema";
import { Work } from "src/work/entities/work.entity";

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
  // @Prop([{type: mongoose.Schema.Types.ObjectId, ref: Class.name}])
  @Prop({ type:[{ type: mongoose.Schema.Types.ObjectId, ref: Class.name}]})
  classes: [Class]
  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: Work.name }]})
  work: Work[];
    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: Assessment.name }]})
    assessment: Assessment[];
    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: Attendance.name }]})
  attendance: Attendance[];

}

export const UsersSchema = SchemaFactory.createForClass(Users)

