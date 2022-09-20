import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkDto {
  
  @IsNotEmpty()
    @IsString()
  title: string;
  @IsNotEmpty()
    @IsString()
  description: string;

}
