import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, NotFoundException, HttpStatus, Req } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import Path from 'path'
import multer, { diskStorage } from 'multer';
import {Roles} from "../decorators/roles.decorator";
import { Role } from "../enums/role.enum";
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary';
import { join } from 'path';
import { CreateAttendanceDto } from 'src/attendance/dto/create-attendance.dto';


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file, cb) => {
  //   const fileStr = req.body.data
    
  //   diskStorage({
  //    filename: function (req, file, cb) {
  //       cb(null, new Date().toISOString()+'-'+file.originalname);
                
  //     }
  //  })
  //   return {fileStr,file,cb}
    
     storage : diskStorage({
        destination: './uploads/works',
        filename: (req, file, cb) =>{
            const filename: string = new Date().toISOString()+'-'+file.originalname;
           
            cb(null, filename)
        }
    })
  }
  })




@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}


  @Get('/all')
  findAll() {
    return this.workService.findAll();
  }
  
  @Post('/uploadfile')
  @UseInterceptors(FileInterceptor('file', { storage }))
  uploadFile(@Res() res,@UploadedFile() file: Express.Multer.File) {
    console.log('file', file)
    this.workService.uploadFileToCloudinary(file)
   
    return res.status(HttpStatus.OK).json({
      success: true,
      path: file.path,
      filename: new Date().toISOString() + '-' + file.filename
    })
    
  }
  
  @Get('/download/:filename')
  findFile(@Param('filename') filename, @Res() res) {
  return res.sendFile(join(process.cwd(), 'uploads/works/' + filename))
  }
 
  @Patch('/:id')
  // @Roles(Role.Professor)
    // @Roles(Role.Student)
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(id, updateWorkDto);
  }

  @Patch('/:id/add-user/:workId')
    // @Roles(Role.Professor)
    // @Roles(Role.Student)
  addUser(@Param('id') userId: string, @Param('workId') workId: string) {
    return this.workService.addUser(userId, workId)
    }

  @Patch('/:id/remove-user/:workId')
    //  @Roles(Role.Professor)
    // @Roles(Role.Student)
  removeUser(@Param('id') userId: string, @Param('workId') workId: string) {
    return this.workService.removeUser(userId, workId)
  }
  
  @Get('/:workId/users')
    // @Roles(Role.Professor)
  getUser(@Param('workId') workId: string) {
    return this.workService.getUsers(workId)
  }

  @Delete('/:id')
    // @Roles(Role.Professor)
    // @Roles(Role.Student)
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
