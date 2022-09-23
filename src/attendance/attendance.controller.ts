import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

const storage = {
    storage: diskStorage({
      destination: './uploads/attendance',
      filename: (req, file, cb) => {
         const filename: string = file.originalname;
        cb(null, filename)
       }
    })
  }

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

 
@Post('/upload')
  @UseInterceptors(FileInterceptor('file', storage ))
uploadFile(@UploadedFile() file, @Body() createAttendanceDto: CreateAttendanceDto) {
    
    return this.attendanceService.create({...createAttendanceDto, filename: file.filename})
      
    }

  @Get('/download/:filename')
  findFile(@Param('filename') filename, @Res() res){
  return res.sendFile(join(process.cwd(), 'uploads/attendance/' + filename))
  }


  @Get()
  findAll() {
    return this.attendanceService.findAll();
  }

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
