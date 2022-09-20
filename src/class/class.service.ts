import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateClassDto } from './dto/update-class.dto';
import { UsersService } from '../users/users.service';
import { Class } from './entities/class.entity';


@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private classModel: Model<Class>,  private userService: UsersService,) {}

  async create(nameClass: string, open: boolean) {

    const findOneClass = await this.classModel.findOne({nameClass})

    if(findOneClass) throw new BadRequestException('Class already exist!')

    const oneClass = await this.classModel.create({nameClass, open})

    return  oneClass.save()

  }

  async findAll() {
    return this.classModel.find().populate('user');
  }

  async findOne(nameClass: string) {
    if(!nameClass) throw new BadRequestException((`Class with this name: ${nameClass} does not exist!`))
    return this.classModel.findOne({nameClass}).exec();
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
     

    return await this.classModel.findByIdAndUpdate(
      
        {
          _id: id,           
        },
        {
          $push: updateClassDto
        },
        { new: true }
      
    )
  }

  async addUser(userId: string, classId: string) {
    return this.classModel.findByIdAndUpdate(
      classId,
      { $addToSet:  { user: userId }},
  { new: true}
    )
  }

  async removeUser(userId: string, classId: string) {
    return this.classModel.findByIdAndUpdate(
      classId,
      { $pull: { user: userId } },
      { new: true}
    )
  }

   async getUsers(classId: string) {
    const classes = await this.classModel.findById(classId).populate('classes');
    return classes;
  }

  async remove(nameClass: string) {
    return this.classModel.deleteOne({nameClass}).exec();
  }
}
