import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './entities/user.entity';
import { encodePassword } from '../utils/bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    
    const {email, password} = createUserDto
    const users = await this.usersModel.find({ email });
    if (users.length) throw new BadRequestException('Email in use');

    createUserDto.password = encodePassword(password);

    const user = await this.usersModel.create(createUserDto);
    return user.save(); // saves the entity in MongoDB
  }

  async findAll() {
    return await this.usersModel.find().populate({
      path: 'classes', populate: [{
        path: 'lecture', populate: [{ path: 'assessment'},{path: 'work'},{path: 'attendance'}],
      }],

    }).exec();
  }


  async findEmail(email: string) {
    return await this.usersModel.findOne({ email }).populate({
      path: 'classes', populate: [{
        path: 'lecture', populate: [{ path: 'assessment'},{path: 'work'},{path: 'attendance'}],
      }],

    }).exec();
  }

  async whoami(email: string) {
    
    return await this.usersModel.findOne({ email }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersModel.findByIdAndUpdate(
      {
      _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true
      },
    )
  }

  async addClass(userId: string, classId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $addToSet:  { classes: classId }},
  { new: true}
    )
  }

  async removeClass(userId: string, classId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $pull: { classes: classId } },
      { new: true}
    )
  }

   async getClasses(email: string) {
    const user = await this.usersModel.findOne({email}).populate('classes');
    return user;
  }

  async addWork(userId: string, workId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $addToSet:  { work: workId }},
  { new: true}
    )
  }

  async removeWork(userId: string, workId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $pull: { work: workId } },
      { new: true}
    )
  }

   async getWork(userId: string) {
    const user = await this.usersModel.findById(userId).populate('work');
    return user;
  }

  async addAssessment(userId: string, assessmentId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $addToSet:  { assessment: assessmentId }},
  { new: true}
    )
  }

  async removeAssessment(userId: string, assessmentId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $pull: { assessment: assessmentId } },
      { new: true}
    )
  }

   async getAssessment(email: string) {
     const user = await this.usersModel.findOne({ email })
    return user;
  }

   async addAttendance(userId: string, attendanceId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $addToSet:  { attendance: attendanceId }},
  { new: true}
    )
  }

  async removeAttendance(userId: string, attendanceId: string) {
    return this.usersModel.findByIdAndUpdate(
      userId,
      { $pull: { attendance: attendanceId } },
      { new: true}
    )
  }

   async getAttendance(userId: string) {
    const user = await this.usersModel.findById(userId).populate('attendance');
    return user;
  }

  async remove(id: string) {
    return await this.usersModel.deleteOne({
      _id: id
    }).exec()
  }
}