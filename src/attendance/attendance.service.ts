import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(@InjectModel(Attendance.name) private attendanceModel: Model<Attendance>) {}
  async create(createAttendanceDto: CreateAttendanceDto) {
    return await(await this.attendanceModel.create(createAttendanceDto)).save();
  }

  findAll() {
    return this.attendanceModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} attendance`;
  // }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    return await this.attendanceModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $push: updateAttendanceDto
      },
      {new: true}
    );
  }

  remove(id: string) {
    return this.attendanceModel.deleteOne({id}).exec();
  }
}
