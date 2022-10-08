/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { Lecture } from './entities/lecture.entity';
export declare class LecturesService {
    private lectureModel;
    constructor(lectureModel: Model<Lecture>);
    create(createLectureDto: CreateLectureDto): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<Omit<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[], import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Lecture>;
    update(id: string, updateLectureDto: UpdateLectureDto): Promise<Lecture>;
    addAssessment(assessmentId: string, lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAssessment(assessmentId: string, lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAssessment(lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAttendance(attendanceId: string, lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAttendance(attendanceId: string, lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAttendance(lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addWork(workId: string, lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeWork(workId: string, lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getWork(lectureId: string): Promise<import("mongoose").Document<unknown, any, Lecture> & Lecture & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
