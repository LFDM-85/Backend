import { IsArray, IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsArray()
  role: string[];
  @IsBoolean()
  isValidated: boolean;
}
