import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import mongoose, { Document} from "mongoose";
import { Class } from "src/class/schema/class.schema";

export type UserDocument = Users & Document;
@Schema()
export class Users {
  @Transform(({ value }) => value.toString())
    _id: string
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
  @Prop([{type: mongoose.Schema.Types.ObjectId, ref: Class.name}])
  classes: [Class]

}

export const UsersSchema = SchemaFactory.createForClass(Users)

