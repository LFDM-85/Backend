import { Injectable } from '@nestjs/common';
import { CreateClassUserDto } from './dto/create-class_user.dto';
import { UpdateClassUserDto } from './dto/update-class_user.dto';

@Injectable()
export class ClassUserService {
  create(createClassUserDto: CreateClassUserDto) {
    return 'This action adds a new classUser';
  }

  findAll() {
    return `This action returns all classUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classUser`;
  }

  update(id: number, updateClassUserDto: UpdateClassUserDto) {
    return `This action updates a #${id} classUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} classUser`;
  }
}
