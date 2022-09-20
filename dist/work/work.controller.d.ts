import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
export declare class WorkController {
    private readonly workService;
    constructor(workService: WorkService);
    create(createWorkDto: CreateWorkDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorkDto: UpdateWorkDto): string;
    remove(id: string): string;
}
