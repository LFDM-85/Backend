import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';


export class CreateClassDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  open: boolean;
}
