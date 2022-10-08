/// <reference types="multer" />
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
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './entities/work.entity';
export declare class WorkService {
    private workModel;
    private cloudinary;
    constructor(workModel: Model<Work>, cloudinary: CloudinaryService);
    create(createWorkDto: CreateWorkDto): Promise<import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    uploadFileToCloudinary(file: Express.Multer.File): Promise<(resolve: any, reject: any) => void>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Work>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Work>;
    update(id: string, updateWorkDto: UpdateWorkDto): Promise<import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addUser(userId: string, workId: string): Promise<import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeUser(userId: string, workId: string): Promise<import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUsers(workId: string): Promise<import("mongoose").Document<unknown, any, Work> & Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
