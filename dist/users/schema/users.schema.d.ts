import mongoose, { Document } from "mongoose";
import { Class } from "src/class/schema/class.schema";
export declare type UserDocument = Users & Document;
export declare class Users {
    _id: string;
    name: string;
    image: string;
    email: string;
    password: string;
    roles: string[];
    isValidated: boolean;
    classes: [Class];
}
export declare const UsersSchema: mongoose.Schema<Users, mongoose.Model<Users, any, any, any, any>, {}, {}, {}, {}, "type", Users>;
