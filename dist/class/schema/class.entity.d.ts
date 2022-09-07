import * as mongoose from 'mongoose';
export declare const ClassSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    open?: string;
}>;
export declare class Class {
    name: string;
    open: boolean;
}
