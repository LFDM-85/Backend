import mongoose from "mongoose";
import { Users } from "src/users/schema/users.schema";
export declare type AssessmentDocument = Assessment & Document;
export declare class Assessment {
    _id: string;
    assessmentValue: number;
    user: Users;
}
export declare const AssessmentSchema: mongoose.Schema<Assessment, mongoose.Model<Assessment, any, any, any, any>, {}, {}, {}, {}, "type", Assessment>;
