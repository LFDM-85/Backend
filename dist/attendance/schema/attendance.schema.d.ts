import mongoose from "mongoose";
import { Users } from '../../users/entities/user.entity';
export declare type AttendanceDocument = Attendance & Document;
export declare class Attendance {
    _id: string;
    attendance: boolean;
    validation: boolean;
    filename: string;
    user: Users;
}
export declare const AttendanceSchema: mongoose.Schema<Attendance, mongoose.Model<Attendance, any, any, any, any>, {}, {}, {}, {}, "type", Attendance>;
