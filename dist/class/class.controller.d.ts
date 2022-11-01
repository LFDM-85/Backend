import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
export declare class ClassController {
    private classService;
    constructor(classService: ClassService);
    create(createClassDto: CreateClassDto): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(name: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findId(id: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateClassDto: UpdateClassDto): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addClass(userId: string, classId: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeClass(userId: string, classId: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(classId: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addLecture(lectureId: string, classId: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeLecture(lectureId: string, classId: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLectures(classId: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(name: string): Promise<import("mongodb").DeleteResult>;
}
