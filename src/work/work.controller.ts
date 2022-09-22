import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { v4 as uuidv4} from 'uuid'

import { join } from 'path';

const storage = {
    storage: diskStorage({
      destination: './uploads/works',
      filename: (req, file, cb) => {
        //  const filename: string = uuidv4() + file.originalname;
         const filename: string = file.originalname;
        
         

       cb(null, filename)
       }
    })
  }

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  // @Post('/create')
  // create(@Body() createWorkDto: CreateWorkDto) {
  //   return this.workService.create(createWorkDto);
  // }

  @Get('/all')
  findAll() {
    return this.workService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.workService.findOne(+id);
  // }


  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', storage ))
  uploadFile(@UploadedFile() file, createWorkDto: CreateWorkDto) {
    
    return this.workService.create( {...createWorkDto, filename: file.filename, })
      
    }

  @Get('/download/:filename')
  findFile(@Param('filename') filename, @Res() res){
  return res.sendFile(join(process.cwd(), 'uploads/works/' + filename))
  }
  
  // @Post('/upload')
  // @UseInterceptors(FileInterceptor('file', {
  //   storage: diskStorage({
  //     destination: './works',
  //     filename: (req, file, callback) => {
  //       const filename = `${file.originalname}`;
  //       callback(null, filename)
  //     }
  //     })
  // }))
  // uploadFile(@UploadedFile() file:Express.Multer.File) {
  //   console.log(file);
  //   return 'File uploaded'
  // }
  
  // @Get('/download/:filepath')
  // getFile(@Param('filepath') file, @Res() res) {
  //   return res.sendFile(file, { root: '/works'})
  //   }
   

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
