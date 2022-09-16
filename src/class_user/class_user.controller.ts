import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassUserService } from './class_user.service';
import { CreateClassUserDto } from './dto/create-class_user.dto';
import { UpdateClassUserDto } from './dto/update-class_user.dto';

@Controller('class-user')
export class ClassUserController {
  constructor(private readonly classUserService: ClassUserService) {}

  @Post()
  create(@Body() createClassUserDto: CreateClassUserDto) {
    return this.classUserService.create(createClassUserDto);
  }

  @Get()
  findAll() {
    return this.classUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassUserDto: UpdateClassUserDto) {
    return this.classUserService.update(+id, updateClassUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classUserService.remove(+id);
  }
}
