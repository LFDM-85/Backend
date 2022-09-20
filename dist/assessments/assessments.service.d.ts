import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
export declare class AssessmentsService {
    create(createAssessmentDto: CreateAssessmentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAssessmentDto: UpdateAssessmentDto): string;
    remove(id: number): string;
}
