import { Model } from 'mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
export declare class ClassService {
    private usersModel;
    constructor(usersModel: Model<Class>);
    create(createClassDto: CreateClassDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClassDto: UpdateClassDto): string;
    remove(id: number): string;
}
