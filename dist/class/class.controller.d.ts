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
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
export declare class ClassController {
    private classService;
    constructor(classService: ClassService);
    create(createClassDto: CreateClassDto): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(name: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateClassDto: UpdateClassDto): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addClass(userId: string, classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeClass(userId: string, classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addLecture(lectureId: string, classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeLecture(lectureId: string, classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLectures(classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/class.entity").Class> & import("./entities/class.entity").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(name: string): Promise<import("mongodb").DeleteResult>;
}
