import mongoose from "mongoose";
import { Assessment } from "src/assessments/entities/assessment.entity";
import { Attendance } from "src/attendance/entities/attendance.entity";
import { Work } from "src/work/entities/work.entity";
export declare type LectureDocument = Lecture & Document;
export declare class Lecture {
    _id: string;
    summary: string;
    description: string;
    finished: boolean;
    assessment: Assessment[];
    work: Work[];
    attendance: Attendance;
}
export declare const LectureSchema: mongoose.Schema<Lecture, mongoose.Model<Lecture, any, any, any, any>, {}, {}, {}, {}, "type", Lecture>;
