import { AssessmentsService } from './assessments.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
export declare class AssessmentsController {
    private readonly assessmentsService;
    constructor(assessmentsService: AssessmentsService);
    create(createAssessmentDto: CreateAssessmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAssessmentDto: UpdateAssessmentDto): string;
    remove(id: string): string;
}
