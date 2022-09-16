import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import { Users} from "../../users/schema/users.schema";
import { Class} from "../../class/schema/class.schema";

export type ClassUserDocument = ClassUser & Document
@Schema()
export class ClassUser {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Class'})
    nameOfClass: string;
    @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'Users'})
    userEmail: string
}

export const ClassUserSchema = SchemaFactory.createForClass((ClassUser))