import { PartialType } from '@nestjs/mapped-types';
import { CreateClassUserDto } from './create-class_user.dto';

export class UpdateClassUserDto extends PartialType(CreateClassUserDto) {}
