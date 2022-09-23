import mongoose, { Document } from "mongoose";
import { Assessment } from "src/assessments/entities/assessment.entity";
import { Attendance } from "src/attendance/entities/attendance.entity";
import { Class } from "src/class/schema/class.schema";
import { Work } from "src/work/entities/work.entity";
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
    work: Work[];
    assessment: Assessment[];
    attendance: Attendance[];
}
export declare const UsersSchema: mongoose.Schema<Users, mongoose.Model<Users, any, any, any, any>, {}, {}, {}, {}, "type", Users>;
