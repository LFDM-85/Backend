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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").Users>;
    whoami(req: any): Promise<string>;
    findAllUsers(): Promise<Omit<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findUser(id: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addClass(userId: string, classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeClass(userId: string, classId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(userId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addWork(userId: string, workId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeWork(userId: string, workId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getWork(userId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAssessment(userId: string, assessmentId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAssessment(userId: string, assessmentId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAssessment(userId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAttendance(userId: string, attendanceId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAttendance(userId: string, attendanceId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAttendance(userId: string): Promise<import("mongoose").Document<unknown, any, import("./entities/user.entity").Users> & import("./entities/user.entity").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
