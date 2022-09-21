import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Get()
  findAll() {
    return this.attendanceService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.attendanceService.findOne(+id);
  // }

   @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './attendance',
      filename: (req, file, callback) => {
        const filename = `${file.originalname}`;
        callback(null, filename)
      }
      })
    }))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    
    return 'File upload API'
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceService.update(id, updateAttendanceDto);
  }

   @Patch('/:id/add-user/:attendanceId')
  addAttendance(@Param('id') userId: string, @Param('attendanceId') attendanceId: string) {
    return this.attendanceService.addUser(userId, attendanceId)
    }

   @Patch('/:id/remove-user/:attendanceId')
  removeAttendance(@Param('id') userId: string, @Param('attendanceId') attendanceId: string) {
    return this.attendanceService.removeUser(userId, attendanceId)
  }
  
  @Get('/:attendanceId/users')
  getAttendance(@Param('attendanceId') attendanceId: string) {
    return this.attendanceService.getUsers(attendanceId)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceService.remove(id);
  }
}
