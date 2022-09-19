import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
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

  @UseGuards(AuthenticatedGuard)
  @Get('/whoami')
  async whoami(@ Request() req): Promise<string> {
    return req.user;
  }

  @Get('/all')
  // @UseGuards(JwtAuthGuard)
  findAllUsers() {
    return this.usersService.findAll();
  }
  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  findUser(@Param('email') email: string) {
    return this.usersService.findOne(email);
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
  
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
