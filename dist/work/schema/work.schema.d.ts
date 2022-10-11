import mongoose from "mongoose";
export declare type WorkDocument = Work & Document;
export declare class Work {
    _id: string;
    filename: string;
    filepath: string;
    owner: string;
}
export declare const WorkSchema: mongoose.Schema<Work, mongoose.Model<Work, any, any, any, any>, {}, {}, {}, {}, "type", Work>;
