import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Users, UserDocument } from './schema/users.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec()
  }

  async findById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id)
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email }).exec()
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec()
  }

  async remove(id: string): Promise<UserDocument> {
    return this.userModel.findByIdAndDelete(id).exec()
  }
  // async findAll() {
  //   return await this.usersModel
  //     .find()
  //     .populate({
  //       path: 'classes',
  //       populate: [
  //         {
  //           path: 'lecture',
  //           populate: [{ path: 'assessment' }, { path: 'work' }, { path: 'attendance' }],
  //         },
  //       ],
  //     })
  //     .exec()
  // }

  // async findById(id: string): Promise<UserDocument> {
  //   return this.usersModel.findById(id)
  // }
  // async findEmail(email: string): Promise<UserDocument> {
  //   return this.usersModel.findOne({ email }).exec()
  // }

  async whoami(email: string) {
    return await this.userModel.findOne({ email }).exec()
  }

  // async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
  //   return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec()
  // }

  async addClass(userId: string, classId: string) {
    return this.userModel.findByIdAndUpdate(userId, { $set: { classes: classId } }, { new: true })
  }

  async removeClass(userId: string, classId: string) {
    return this.userModel.findByIdAndUpdate(userId, { $pull: { classes: classId } }, { new: true })
  }

  async getClasses(email: string) {
    const user = await this.userModel.findOne({ email }).populate('classes')
    return user
  }

  async addWork(userId: string, workId: string) {
    return this.userModel.findByIdAndUpdate(userId, { $addToSet: { work: workId } }, { new: true })
  }

  async removeWork(userId: string, workId: string) {
    return this.userModel.findByIdAndUpdate(userId, { $pull: { work: workId } }, { new: true })
  }

  async getWork(userId: string) {
    const user = await this.userModel.findById(userId).populate('work')
    return user
  }

  async addAssessment(userId: string, assessmentId: string) {
    return this.userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { assessment: assessmentId } },
      { new: true },
    )
  }

  async removeAssessment(userId: string, assessmentId: string) {
    return this.userModel.findByIdAndUpdate(
      userId,
      { $pull: { assessment: assessmentId } },
      { new: true },
    )
  }

  async getAssessment(email: string) {
    const user = await this.userModel.findOne({ email })
    return user
  }

  async addAttendance(userId: string, attendanceId: string) {
    return this.userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { attendance: attendanceId } },
      { new: true },
    )
  }

  async removeAttendance(userId: string, attendanceId: string) {
    return this.userModel.findByIdAndUpdate(
      userId,
      { $pull: { attendance: attendanceId } },
      { new: true },
    )
  }

  async getAttendance(userId: string) {
    const user = await this.userModel.findById(userId).populate('attendance')
    return user
  }
}
