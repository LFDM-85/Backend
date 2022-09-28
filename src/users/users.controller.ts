import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Delete,
  Patch
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto
    );
  }

  @Get('/whoami')
  @UseGuards(AuthenticatedGuard)
  async whoami(@Request() req): Promise<string> {
    return req.user;
  }

  @Get('/all')
  // @UseGuards(JwtAuthGuard)
  findAllUsers() {
    return this.usersService.findAll();
  }
  @Get('/:id')
  // @UseGuards(JwtAuthGuard)
  findUser(@Param('email') email: string) {
    return this.usersService.findEmail(email);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @Patch('/:id/add-class/:classId')
  addClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.usersService.addClass(userId, classId)
    }

   @Patch('/:id/remove-class/:classId')
  removeClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.usersService.removeClass(userId, classId)
  }
  
  @Get('/:id/classes')
  getClasses(@Param('id') userId: string) {
    return this.usersService.getClasses(userId)
  }
  
  @Patch('/:id/add-work/:workId')
  addWork(@Param('id') userId: string, @Param('workId') workId: string) {
    return this.usersService.addWork(userId, workId)
    }

   @Patch('/:id/remove-work/:workId')
  removeWork(@Param('id') userId: string, @Param('workId') workId: string) {
    return this.usersService.removeWork(userId, workId)
  }
  
  @Get('/:id/works')
  getWork(@Param('id') userId: string) {
    return this.usersService.getWork(userId)
  }
  
  @Patch('/:id/add-assessment/:assessmentId')
  addAssessment(@Param('id') userId: string, @Param('assessmentId') assessmentId: string) {
    return this.usersService.addAssessment(userId, assessmentId)
    }

   @Patch('/:id/remove-work/:assessmentId')
  removeAssessment(@Param('id') userId: string, @Param('assessmentId') assessmentId: string) {
    return this.usersService.removeAssessment(userId, assessmentId)
  }
  
  @Get('/:id/assessments')
  getAssessment(@Param('id') userId: string) {
    return this.usersService.getAssessment(userId)
  }
  
   @Patch('/:id/add-attendance/:attendanceId')
  addAttendance(@Param('id') userId: string, @Param('attendanceId') attendanceId: string) {
    return this.usersService.addAttendance(userId, attendanceId)
    }

   @Patch('/:id/remove-attendance/:attendanceId')
  removeAttendance(@Param('id') userId: string, @Param('attendanceId') attendanceId: string) {
    return this.usersService.removeAttendance(userId, attendanceId)
  }
  
  @Get('/:id/attendances')
  getAttendance(@Param('id') userId: string) {
    return this.usersService.getAttendance(userId)
    }
  
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
