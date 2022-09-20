import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAssessmentDto {
  @IsNumber()
    @IsNotEmpty()
  assessmentValue: number;
}
