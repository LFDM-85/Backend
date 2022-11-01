import { IsArray, IsBoolean, IsEmail, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  
  @IsEmail()
    @IsNotEmpty()
  email: string;

  @IsString()
    @IsNotEmpty()
  password: string;

  @IsString()
    @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsString()
  @IsOptional()
  refreshToken: string;

  @IsArray()
    @IsNotEmpty()
  roles: string[];

  @IsBoolean()
    @IsNotEmpty()
  isValidated: boolean;
}
