import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id)
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }

  @Patch('/:id/add-class/:classId')
  addClass(@Param('id') userId: string, @Param('classId') classId: string) {
    return this.usersService.addClass(userId, classId)
  }

  @Patch('/:id/remove-class/:classId')
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
}
