import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./schema/users.schema").UserDocument>;
    findAll(): Promise<import("./schema/users.schema").UserDocument[]>;
    findById(id: string): Promise<import("./schema/users.schema").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schema/users.schema").UserDocument>;
    remove(id: string): Promise<import("./schema/users.schema").UserDocument>;
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
}
