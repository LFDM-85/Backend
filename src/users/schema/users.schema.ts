import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import { Class } from "src/class/schema/class.schema";

export type UserDocument = Users & Document;
@Schema()
export class Users {
  @Prop()
  name: string;
  @Prop({require: true})
  email: string
  @Prop({require: true})
  password: string
  @Prop()
  roles: string[]
  @Prop()
  isValidated: boolean;
  @Prop(({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }] }))
  aClass: Class[]

}

export const UsersSchema = SchemaFactory.createForClass(Users)

