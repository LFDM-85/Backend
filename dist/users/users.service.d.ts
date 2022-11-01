import { Model } from 'mongoose';
import { Users, UserDocument } from './schema/users.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<Users>;
    findAll(): Promise<Omit<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findEmail(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    whoami(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addClass(userId: string, classId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeClass(userId: string, classId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addWork(userId: string, workId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeWork(userId: string, workId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getWork(userId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAssessment(userId: string, assessmentId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAssessment(userId: string, assessmentId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAssessment(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAttendance(userId: string, attendanceId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAttendance(userId: string, attendanceId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAttendance(userId: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
