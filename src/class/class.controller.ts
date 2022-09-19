import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import {Roles} from "../decorators/roles.decorator";
import {Role} from "../enums/role.enum";
import { Users } from 'src/users/schema/users.schema';

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

  @Roles(Role.Admin)
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto, users: Users) {
    return this.classService.update(id, updateClassDto, users);
  }
  @Roles(Role.Admin)
  @Delete('/:name')
  remove(@Param('name') name: string) {
    return this.classService.remove(name);
  }
}
