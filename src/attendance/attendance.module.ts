import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { LecturesModule } from 'src/lectures/lectures.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceSchema, Attendance } from './schema/attendance.schema';

@Module({
  imports: [
    LecturesModule,
    MongooseModule.forFeature([
      { name: Attendance.name, schema: AttendanceSchema },
    ]),
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}
