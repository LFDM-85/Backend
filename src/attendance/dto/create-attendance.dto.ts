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
}
