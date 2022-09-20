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
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { Assessment } from './entities/assessment.entity';
export declare class AssessmentsService {
    private assessmentModel;
    constructor(assessmentModel: Model<Assessment>);
    create(createAssessmentDto: CreateAssessmentDto): Promise<import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Assessment>;
    update(id: string, updateAssessmentDto: UpdateAssessmentDto): Promise<import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addUser(userId: string, assessmentId: string): Promise<import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeUser(userId: string, assessmentId: string): Promise<import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUsers(assessmentId: string): Promise<import("mongoose").Document<unknown, any, Assessment> & Assessment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
