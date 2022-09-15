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

  @Roles(Role.Admin)
  @Patch('/:name')
  update(@Param('name') name: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(name, updateClassDto);
  }
  @Roles(Role.Admin)
  @Delete('/:name')
  remove(@Param('name') name: string) {
    return this.classService.remove(name);
  }
}
