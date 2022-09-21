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
  addAssessment(@Param('assessmentId') assessmentId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.addAssessment(assessmentId, lectureId)
    }

   @Patch('/:assessmentId/remove-assessment/:lectureId')
  removeAssessment(@Param('assessmentId') assessmentId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.removeAssessment(assessmentId, lectureId)
  }
  
  @Get('/:lectureId/assessments')
  getAssessment(@Param('lectureId') lectureId: string) {
    return this.lecturesService.getAssessment(lectureId)
  }

    @Patch('/:attendanceId/add-attendance/:lectureId')
  addAttendance(@Param('attendanceId') attendanceId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.addAttendance(attendanceId, lectureId)
    }

   @Patch('/:attendanceId/remove-attendance/:lectureId')
  removeAttendance(@Param('attendanceId') attendanceId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.removeAttendance(attendanceId, lectureId)
  }
  
  @Get('/:classId/attendances')
  getAttendance(@Param('lectureId') lectureId: string) {
    return this.lecturesService.getAttendance(lectureId)
  }

    @Patch('/:workId/add-work/:lectureId')
  addWork(@Param('workId') workId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.addWork(workId, lectureId)
    }

   @Patch('/:workId/remove-work/:lectureId')
  removeWork(@Param('workId') workId: string, @Param('lectureId') lectureId: string) {
    return this.lecturesService.removeWork(workId, lectureId)
  }
  
  @Get('/:lectureId/works')
  getWork(@Param('lectureId') lectureId: string) {
    return this.lecturesService.getWork(lectureId)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.lecturesService.remove(id);
  }
}
