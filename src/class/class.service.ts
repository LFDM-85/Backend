import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/users/schema/users.schema';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassDocument, Class } from "./schema/class.schema";
import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private classModel: Model<ClassDocument>,  private userService: UsersService,) {}

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

  async update(id: string, updateClassDto: UpdateClassDto, users: Users) {

    const { email } = users;

      const user  = await this.userService.findEmail(email);
      

    return await this.classModel.findByIdAndUpdate(
      
        {
          _id: id,           
        },
        {
          $push: {user: user}
        },
        { new: true }
      
    )
  }

  async remove(nameClass: string) {
    return this.classModel.deleteOne({nameClass}).exec();
  }
}
