import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
export declare class WorkService {
    create(createWorkDto: CreateWorkDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorkDto: UpdateWorkDto): string;
    remove(id: number): string;
}
