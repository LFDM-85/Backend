import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkDto {
  
  @IsNotEmpty()
    @IsString()
  filename: string;
  @IsNotEmpty()
    @IsString()
  filepath: string;
  @IsNotEmpty()
    @IsString()
  owner: string; 

}
