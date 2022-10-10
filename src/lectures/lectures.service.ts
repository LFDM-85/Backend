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

    const { summary} = createLectureDto

    const findOneLecture = await this.lectureModel.findOne({ summary })
    
    if (findOneLecture) throw new BadRequestException('Lecture already exist!')
    
    return await (await this.lectureModel.create(createLectureDto)).save()

  }

  findAll() {
    return this.lectureModel.find().populate('assessment');
  }

  // async findOne(id: string) {
    
  // }

  async update(id: string, updateLectureDto: UpdateLectureDto): Promise<Lecture> {
    return await this.lectureModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateLectureDto
      },
      { new: true}
    );
  }

  async addAssessment(assessmentId: string, lectureId: string) {
    return this.lectureModel.findByIdAndUpdate(
      lectureId,
      { $addToSet: { assessment: assessmentId } },
      {new: true}
    )
  }

  async removeAssessment(assessmentId: string, lectureId: string) {
    return this.lectureModel.findByIdAndUpdate(
      lectureId,
      { $pull: { assessment: assessmentId } },
      {new: true}
    )
  }

  async getAssessment(lectureId: string) {
    return await (await this.lectureModel.findById(lectureId)).populate('assessment')
  }

  async addAttendance(attendanceId: string, lectureId: string) {
    return this.lectureModel.findByIdAndUpdate(
      lectureId,
      { $addToSet: { attendance: attendanceId } },
      {new: true}
    )
  }

  async removeAttendance(attendanceId: string, lectureId: string) {
    return this.lectureModel.findByIdAndUpdate(
      lectureId,
      { $pull: { assessment: attendanceId } },
      {new: true}
    )
  }

  async getAttendance(lectureId: string) {
    return await this.lectureModel.findById(lectureId).populate('attendance')
  }

  async addWork(workId: string, lectureId: string) {
    return this.lectureModel.findByIdAndUpdate(
      lectureId,
      { $addToSet: { work: workId } },
      {new: true}
    )
  }

  async removeWork(workId: string, lectureId: string) {
    return this.lectureModel.findByIdAndUpdate(
      lectureId,
      { $pull: { work: workId } },
      {new: true}
    )
  }

  async getWork(lectureId: string) {
    return await this.lectureModel.findById(lectureId).populate('work')
  }




  async remove(id: string) {
    return this.lectureModel.deleteOne({ id }).exec();
  }
}
