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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
export declare class WorkController {
    private readonly workService;
    constructor(workService: WorkService);
    create(createWorkDto: CreateWorkDto): Promise<import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/work.entity").Work>;
    handleUpload(file: Express.Multer.File): string;
    update(id: string, updateWorkDto: UpdateWorkDto): Promise<import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addUser(userId: string, workId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeUser(userId: string, workId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUser(workId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/work.entity").Work> & import("./entities/work.entity").Work & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
