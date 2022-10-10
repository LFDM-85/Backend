import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssessmentDto {
  @IsNumber()
    @IsNotEmpty()
  assessmentValue: number;
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  @IsNotEmpty()
  lectureId: string;

}
