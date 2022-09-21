import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post('/create')
  create(@Body() createWorkDto: CreateWorkDto) {
    return this.workService.create(createWorkDto);
  }

  @Get('/all')
  findAll() {
    return this.workService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.workService.findOne(+id);
  // }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './works',
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

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(id, updateWorkDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
