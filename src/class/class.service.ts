import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateClassDto } from './dto/update-class.dto';
import {ClassDocument, Class} from "./schema/class.schema";
import {CreateClassDto} from "./dto/create-class.dto";

@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private classModel: Model<ClassDocument>) {}

  async create(nameClass: string, open: boolean) {

    const findOneClass = await this.classModel.findOne({nameClass})

    if(findOneClass) throw new BadRequestException('Class already exist!')

    const oneClass = await this.classModel.create({nameClass, open})

    return  oneClass.save()

  }

  async findAll() {
    return this.classModel.find();
  }

  async findOne(name: string) {
    return this.classModel.findOne({name}).exec();
  }

  async findOneById(id: string) {
    return this.classModel.findById({id}).exec()
  }


  async update(name: string, updateClassDto: UpdateClassDto) {
    return this.classModel.updateOne({name}, {$set: {...updateClassDto}});

  }

  async remove(name: string) {
    return this.classModel.deleteOne({name}).exec();
  }
}
