import { ClassUserService } from './class_user.service';
import { CreateClassUserDto } from './dto/create-class_user.dto';
import { UpdateClassUserDto } from './dto/update-class_user.dto';
export declare class ClassUserController {
    private readonly classUserService;
    constructor(classUserService: ClassUserService);
    create(createClassUserDto: CreateClassUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateClassUserDto: UpdateClassUserDto): string;
    remove(id: string): string;
}
