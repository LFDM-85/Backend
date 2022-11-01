import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("./schema/users.schema").Users>;
    whoami(req: any): Promise<string>;
    findAllUsers(): Promise<Omit<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findUser(email: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addClass(userId: string, classId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeClass(userId: string, classId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(email: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addWork(userId: string, workId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeWork(userId: string, workId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getWork(userId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAssessment(userId: string, assessmentId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAssessment(userId: string, assessmentId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAssessment(userEmail: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAttendance(userId: string, attendanceId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAttendance(userId: string, attendanceId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAttendance(userId: string): Promise<import("./schema/users.schema").Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
