import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';

@Controller('lectures')
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Post('/create')
  create(@Body() createLectureDto: CreateLectureDto) {
    return this.lecturesService.create(createLectureDto);
  }

  @Get('/all')
  findAll() {
    return this.lecturesService.findAll().populate('assessment');
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.lecturesService.findOne(id);
  // }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateLectureDto: UpdateLectureDto) {
    return this.lecturesService.update(id, updateLectureDto);
  }

  @Patch('/:assessmentId/add-assessment/:lectureId')
  addClass(@Param('assessmentId') assessmentId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.addAssessment(assessmentId, lectureId)
    }

   @Patch('/:assessmentId/remove-assessment/:lectureId')
  removeClass(@Param('assessmentId') assessmentId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.removeAssessment(assessmentId, lectureId)
  }
  
  @Get('/:classId/assessment')
  getClasses(@Param('lectureId') lectureId: string) {
    return this.lecturesService.getAssessment(lectureId)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.lecturesService.remove(id);
  }
}
