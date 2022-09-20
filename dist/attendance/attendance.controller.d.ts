import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(createAttendanceDto: CreateAttendanceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAttendanceDto: UpdateAttendanceDto): string;
    remove(id: string): string;
}
