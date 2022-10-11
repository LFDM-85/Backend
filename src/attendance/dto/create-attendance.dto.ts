import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateAttendanceDto {
  @IsBoolean()
    @IsOptional()
  attendance: boolean;
  @IsBoolean()
    @IsOptional()
  validation: boolean;
  @IsString()
    @IsOptional()
  filename: string
  @IsString()
    @IsOptional()
  filepath: string
  @IsString()
    @IsOptional()
  owner: string
}
