import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';


export class CreateClassDto {
 
  @IsNotEmpty()
  @IsString()
  nameClass: string;

  @IsNotEmpty()
  @IsBoolean()
  open: boolean;
}
