import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateLectureDto {
 
  @IsNotEmpty()
  @IsString()
  summary: string;
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  finished: boolean;
}
