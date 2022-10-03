import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import mongoose from 'mongoose';
import { Users } from '../../users/entities/user.entity';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance {
  _id: string;
  attendance: boolean;
  validation: boolean;
  filename: string;
  user: Users;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
