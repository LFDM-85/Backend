import mongoose from "mongoose";
import { Users } from "src/users/entities/user.entity";
export declare type WorkDocument = Work & Document;
export declare class Work {
    _id: string;
    filename: string;
    user: Users[];
}
export declare const WorkSchema: mongoose.Schema<Work, mongoose.Model<Work, any, any, any, any>, {}, {}, {}, {}, "type", Work>;
