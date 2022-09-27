import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import {Roles} from "../decorators/roles.decorator";
import {Role} from "../enums/role.enum";

@Controller('class')
export class ClassController {
  constructor(private  classService: ClassService) {}

  @Post('/create')
    @Roles(Role.Admin)
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto.nameClass, createClassDto.open)
  }

  @Get('/all')
  findAll() {
    return this.classService.findAll();
  }

  @Get('/:name')
  findOne(@Param('name') name: string) {
    return this.classService.findOne(name);
  }

  @Patch('/:id')
    @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(id, updateClassDto);
  }
  

  @Patch('/:id/add-user/:classId')
         @Roles(Role.Admin)

  addClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.classService.addUser(userId, classId)
    }

  @Patch('/:id/remove-user/:classId')
         @Roles(Role.Admin)

  removeClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.classService.removeUser(userId, classId)
  }
  
  @Get('/:classId/users')
  getClasses(@Param('classId') classId: string) {
    return this.classService.getUsers(classId)
  }
  
  @Patch('/:lectureId/add-lecture/:classId')
    @Roles(Role.Professor)

  addLecture(@Param('lectureId') lectureId: string, @Param('classId') classId: string) {
    return this.classService.addLecture(lectureId, classId)
  }

  @Patch('/:lectureId/remove-lecture/:classId')
    @Roles(Role.Professor)
  removeLecture(@Param('lectureId') lectureId: string, @Param('classId') classId: string) {
    return this.classService.removeLecture(lectureId, classId)
  }
  
  @Get('/:classId/lectures')
  getLectures(@Param('classId') classId: string) {
    return this.classService.getLectures(classId)
  }
  


  @Delete('/:name')
     @Roles(Role.Admin)
  remove(@Param('name') name: string) {
    return this.classService.remove(name);
  }
}
