import mongoose, { Document } from "mongoose";
export declare type ClassUserDocument = ClassUser & Document;
export declare class ClassUser {
    nameOfClass: string;
    userEmail: string;
}
export declare const ClassUserSchema: mongoose.Schema<ClassUser, mongoose.Model<ClassUser, any, any, any, any>, {}, {}, {}, {}, "type", ClassUser>;
