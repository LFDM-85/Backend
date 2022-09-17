import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document} from "mongoose";

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
  isValidated: boolean
}

export const UsersSchema = SchemaFactory.createForClass((Users))

