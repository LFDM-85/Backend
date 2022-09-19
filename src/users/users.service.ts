import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './entities/user.entity';
import { encodePassword } from '../utils/bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private usersModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    
    const {email, password} = createUserDto
    const users = await this.usersModel.find({ email });
    if (users.length) throw new BadRequestException('Email in use');

    createUserDto.password = encodePassword(password);

    const user = await this.usersModel.create(createUserDto);
    return user.save(); // saves the entity in MongoDB
  }

  async findAll() {
    return await this.usersModel.find().populate('classes').exec();
  }

  async findOne(condition: any): Promise<Users> {
    if (!condition) {
      return null;
    }
    return await this.usersModel.findOne(condition).exec();
  }

  async findEmail(email: string) {
    return await this.usersModel.findOne({ email }).exec();
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

   async getClasses(userId: string) {
    const user = await this.usersModel.findById(userId).populate('classes');
    return user;
  }

  async remove(id: string) {
    return await this.usersModel.deleteOne({
      _id: id
    }).exec()
  }
}