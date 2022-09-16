import { CreateClassUserDto } from './dto/create-class_user.dto';
import { UpdateClassUserDto } from './dto/update-class_user.dto';
export declare class ClassUserService {
    create(createClassUserDto: CreateClassUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClassUserDto: UpdateClassUserDto): string;
    remove(id: number): string;
}
