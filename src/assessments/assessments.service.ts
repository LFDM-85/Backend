import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { Assessment } from './entities/assessment.entity';

@Injectable()
export class AssessmentsService {
  constructor(@InjectModel(Assessment.name) private assessmentModel: Model<Assessment>) {}
  async create(createAssessmentDto: CreateAssessmentDto) {
    return await(await this.assessmentModel.create(createAssessmentDto)).save();
  }

  findAll() {
    return this.assessmentModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} assessment`;
  // }

  async update(id: number, updateAssessmentDto: UpdateAssessmentDto) {
    return await this.assessmentModel.findByIdAndUpdate(
      {
        _id:id,
      },
      {
        $push: updateAssessmentDto
      },
      {new: true}
    );
  }

  async addUser(userId: string, assessmentId: string) {
    return this.assessmentModel.findByIdAndUpdate(
      assessmentId,
      { $addToSet:  { user: userId }},
  { new: true}
    )
  }

  async removeUser(userId: string, assessmentId: string) {
    return this.assessmentModel.findByIdAndUpdate(
      assessmentId,
      { $pull: { user: userId } },
      { new: true}
    )
  }

   async getUsers(assessmentId: string) {
    const assessment = await this.assessmentModel.findById(assessmentId).populate('user');
    return assessment;
   }
  

  remove(id: number) {
    return this.assessmentModel.deleteOne({id}).exec();
  }
}
