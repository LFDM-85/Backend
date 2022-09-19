import mongoose, { Document } from "mongoose";
import { Users } from "src/users/schema/users.schema";
export declare type ClassDocument = Class & Document;
export declare class Class {
    nameClass: string;
    open: boolean;
    user: Users[];
}
export declare const ClassSchema: mongoose.Schema<Class, mongoose.Model<Class, any, any, any, any>, {}, {}, {}, {}, "type", Class>;
