import mongoose, { Document } from "mongoose";
import { Class } from "src/class/schema/class.schema";
export declare type LectureDocument = Lecture & Document;
export declare class Lecture {
    _id: string;
    summary: string;
    description: string;
    finished: boolean;
    class: Class;
}
export declare const LectureSchema: mongoose.Schema<Lecture, mongoose.Model<Lecture, any, any, any, any>, {}, {}, {}, {}, "type", Lecture>;
