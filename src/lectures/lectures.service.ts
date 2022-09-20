import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { Lecture } from './entities/lecture.entity';

@Injectable()
export class LecturesService {
  constructor(@InjectModel(Lecture.name) private lectureModel: Model<Lecture>){}
  async create(createLectureDto: CreateLectureDto) {

    const { _id} = createLectureDto

    const findOneLecture = await this.lectureModel.findOne({ _id })
    
    if (findOneLecture) throw new BadRequestException('Lecture already exist!')
    
    return await (await this.lectureModel.create(createLectureDto)).save()

  }

  findAll() {
    return this.lectureModel.find();
  }

  // async findOne(id: string) {
    
  // }

  async update(id: string, updateLectureDto: UpdateLectureDto) {
    return await this.lectureModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $push: updateLectureDto
      },
      { new: true}
    );;
  }

  async remove(id: string) {
    return this.lectureModel.deleteOne({ id }).exec();
  }
}
