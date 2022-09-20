import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { StringifyOptions } from "querystring";

export class CreateLectureDto {
  _id: string;
  @IsNotEmpty()
  @IsString()
  summary: string;
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  finished: boolean;
}
