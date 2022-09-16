import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';

export class CreateClassUserDto {

    @IsNotEmpty()
    @IsString()
    nameOfClass: string;

    @IsNotEmpty()
    @IsBoolean()
    userEmail: string;
}



