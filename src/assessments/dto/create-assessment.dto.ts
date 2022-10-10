import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssessmentDto {
  @IsNumber()
    @IsNotEmpty()
  assessmentValue: number;
  @IsString()
  @IsNotEmpty()
  userEmail: string;
  @IsString()
  @IsNotEmpty()
  lectureId: string;

}
