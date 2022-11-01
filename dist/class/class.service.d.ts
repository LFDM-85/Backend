import { Model } from 'mongoose';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class, ClassDocument } from './schema/class.schema';
export declare class ClassService {
    private classModel;
    constructor(classModel: Model<ClassDocument>);
    create(nameClass: string, open: boolean): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(nameClass: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findId(id: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateClassDto: UpdateClassDto): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addUser(userId: string, classId: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeUser(userId: string, classId: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUsers(classId: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addLecture(lectureId: string, classId: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeLecture(lectureId: string, classId: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLectures(classId: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(nameClass: string): Promise<import("mongodb").DeleteResult>;
}
