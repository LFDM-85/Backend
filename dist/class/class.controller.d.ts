import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
export declare class ClassController {
    private classService;
    constructor(classService: ClassService);
    create(createClassDto: CreateClassDto): Promise<import("./schema/class.schema").Class>;
    findAll(): Promise<(import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(name: string): Promise<import("./schema/class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(name: string, updateClassDto: UpdateClassDto): Promise<import("mongodb").UpdateResult>;
    remove(name: string): Promise<import("mongodb").DeleteResult>;
}
