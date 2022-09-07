import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity'

@Injectable()
export class ClassService {
  constructor(@InjectModel('Class') private usersModel: Model<Class>) {}
  create(createClassDto: CreateClassDto) {
    return 'This action adds a new class';
  }

  findAll() {
    return `This action returns all class`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
