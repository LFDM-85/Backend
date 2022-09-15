import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateClassDto } from './dto/update-class.dto';
import {ClassDocument, Class} from "./schema/class.schema";
import {CreateClassDto} from "./dto/create-class.dto";

@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private classModel: Model<ClassDocument>) {}
  async create(createClassDto: CreateClassDto): Promise<Class> {

    const className = await this.classModel.find({ name });
    if (className) throw new BadRequestException('Class already exist!');


    return  new this.classModel(createClassDto).save()

  }

  async findAll() {
    return this.classModel.find();
  }

  async findOne(name: string) {
    return this.classModel.findOne({name});
  }

  async update(name: string, updateClassDto: UpdateClassDto) {
    return this.classModel.updateOne({name}, {$set: {...updateClassDto}});

  }

  async remove(name: string) {
    return this.classModel.deleteOne({name});
  }
}
