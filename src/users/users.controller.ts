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
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

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
    @Roles(Role.Admin)
  @UseGuards(AuthenticatedGuard)
  findAllUsers() {
    return this.usersService.findAll();
  }
  @Get('/:email')
  @UseGuards(AuthenticatedGuard)
  findUser(@Param('email') email: string) {
    return this.usersService.findEmail(email);
  }

  @Patch('/:id')
    @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @Patch('/:id/add-class/:classId')
    @Roles(Role.Admin)
  addClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.usersService.addClass(userId, classId)
    }

  @Patch('/:id/remove-class/:classId')
     @Roles(Role.Admin)
  removeClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.usersService.removeClass(userId, classId)
  }
  
  @Get('/:email/classes')
  getClasses(@Param('email') email: string) {
    return this.usersService.getClasses(email)
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
  
  @Get('/:email/assessments')
  getAssessment(@Param('email') userEmail: string) {
    return this.usersService.getAssessment(userEmail)
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
    @Roles(Role.Admin)
  delete(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
