import mongoose, { Document } from "mongoose";
import { Lecture } from "src/lectures/entities/lecture.entity";
import { Users } from "src/users/schema/users.schema";
export declare type ClassDocument = Class & Document;
export declare class Class {
    _id: string;
    nameClass: string;
    open: boolean;
    user: Users[];
    lecture: Lecture[];
}
export declare const ClassSchema: mongoose.Schema<Class, mongoose.Model<Class, any, any, any, any>, {}, {}, {}, {}, "type", Class>;
