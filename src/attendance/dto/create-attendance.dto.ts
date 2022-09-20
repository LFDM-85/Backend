import { IsBoolean } from "class-validator";

export class CreateAttendanceDto {
  @IsBoolean()
  attendance: boolean;
  @IsBoolean()
  validation: boolean;
}
