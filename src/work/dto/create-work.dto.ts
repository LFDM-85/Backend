import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkDto {
  
  @IsNotEmpty()
    @IsString()
  filename: string;
 

}
