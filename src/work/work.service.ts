import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(@InjectModel(Work.name) private workModel: Model<Work>) {}
  async create(createWorkDto: CreateWorkDto) {

    const { title} = createWorkDto
    const findOneWork = await this.workModel.findOne({ title })
    if(findOneWork) throw new BadRequestException('Work already exist!')
    return await( await this.workModel.create(createWorkDto)).save();
  }

  findAll() {
    return this.workModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} work`;
  // }

  async update(id: string, updateWorkDto: UpdateWorkDto) {
    return await this.workModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $push: updateWorkDto
      },
      {new: true}
    );
  }

  async remove(id: string) {
    return this.workModel.deleteOne({id}).exec();
  }
}
