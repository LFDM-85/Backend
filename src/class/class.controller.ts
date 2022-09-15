import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('class')
export class ClassController {
  constructor(private  classService: ClassService) {}

  @Post('/create')
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get('/all')
  findAll() {
    return this.classService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.classService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(name, updateClassDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.classService.remove(name);
  }
}
