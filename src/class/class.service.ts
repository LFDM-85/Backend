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

    const classe = await this.classModel.find({name})
    if(classe.length) throw  new BadRequestException(('Class already exist!'))
    return  new this.classModel(createClassDto).save()
    // const classes = await this.classModel.find({ name });
    //
    // if (classes.length) throw new BadRequestException('Class already exist!')
    //
    // const classe = await this.classModel.create({ name, open })
    //
  }

  async findAll() {
    return await this.classModel.find().exec();
  }

  async findOne(id: string) {
    return await this.classModel.findOne({id});
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    return await this.classModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateClassDto,
      },
      {
        new: true
      }
    );
  }

  async remove(id: string) {
    return await this.classModel.deleteOne({_id: id}).exec();
  }
}
