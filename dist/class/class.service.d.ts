import { Model } from 'mongoose';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassDocument, Class } from "./schema/class.schema";
export declare class ClassService {
    private classModel;
    constructor(classModel: Model<ClassDocument>);
    create(nameClass: string, open: boolean): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(nameClass: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneById(id: string): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(nameClass: string, updateClassDto: UpdateClassDto): Promise<import("mongodb").UpdateResult>;
    remove(nameClass: string): Promise<import("mongodb").DeleteResult>;
}
