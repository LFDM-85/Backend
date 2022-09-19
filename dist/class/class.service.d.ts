import { Model } from 'mongoose';
import { Users } from 'src/users/schema/users.schema';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassDocument, Class } from "./schema/class.schema";
import { UsersService } from '../users/users.service';
export declare class ClassService {
    private classModel;
    private userService;
    constructor(classModel: Model<ClassDocument>, userService: UsersService);
    create(nameClass: string, open: boolean): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(nameClass: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateClassDto: UpdateClassDto, users: Users): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(nameClass: string): Promise<import("mongodb").DeleteResult>;
}
