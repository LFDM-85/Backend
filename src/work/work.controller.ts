import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, NotFoundException } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { join } from 'path';

// const storage = {
//     storage: diskStorage({
//       destination: './uploads/works',
//       filename: (req, file, cb) => {
//         const filename: string = file.originalname;
//         if(!filename) throw new NotFoundException('file not found')
//        cb(null, filename)
//        }
//     })
//   }
@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}


  @Get('/all')
  findAll() {
    return this.workService.findAll();
  }

  // @Post('/upload')
  // @UseInterceptors(FileInterceptor('file', storage ))
  // uploadFile(@UploadedFile() file, createWorkDto: CreateWorkDto) {
    
  //   return this.workService.create( {...createWorkDto, filename: file.filename })
      
  //   }

  // @Get('/download/:filename')
  // findFile(@Param('filename') filename, @Res() res){
  // return res.sendFile(join(process.cwd(), 'uploads/works/' + filename))
  // }
   

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(id, updateWorkDto);
  }

  @Patch('/:id/add-user/:workId')
  addUser(@Param('id') userId: string, @Param('workId') workId: string) {
    return this.workService.addUser(userId, workId)
    }

   @Patch('/:id/remove-user/:workId')
  removeUser(@Param('id') userId: string, @Param('workId') workId: string) {
    return this.workService.removeUser(userId, workId)
  }
  
  @Get('/:workId/users')
  getUser(@Param('workId') workId: string) {
    return this.workService.getUsers(workId)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
