"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const attendance_service_1 = require("./attendance.service");
const update_attendance_dto_1 = require("./dto/update-attendance.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const role_enum_1 = require("../enums/role.enum");
const storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './src/uploads/attendance',
        filename: (req, file, cb) => {
            const filename = (file.originalname).replace(/\s/g, '');
            cb(null, filename);
        }
    })
};
let AttendanceController = class AttendanceController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    uploadFile(res, file) {
        return res.status(common_1.HttpStatus.OK).json({
            sucess: true,
            data: file.path
        });
    }
    findAll() {
        return this.attendanceService.findAll();
    }
    update(id, updateAttendanceDto) {
        return this.attendanceService.update(id, updateAttendanceDto);
    }
    addAttendance(userId, attendanceId) {
        return this.attendanceService.addUser(userId, attendanceId);
    }
    removeAttendance(userId, attendanceId) {
        return this.attendanceService.removeUser(userId, attendanceId);
    }
    getAttendance(attendanceId) {
        return this.attendanceService.getUsers(attendanceId);
    }
    remove(id) {
        return this.attendanceService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)('/uploadFile'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', storage)),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Student),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attendance_dto_1.UpdateAttendanceDto]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/:id/add-user/:attendanceId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Student),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('attendanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "addAttendance", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-user/:attendanceId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Student),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('attendanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "removeAttendance", null);
__decorate([
    (0, common_1.Get)('/:attendanceId/users'),
    __param(0, (0, common_1.Param)('attendanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "getAttendance", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Student),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "remove", null);
AttendanceController = __decorate([
    (0, common_1.Controller)('attendance'),
    __metadata("design:paramtypes", [attendance_service_1.AttendanceService])
], AttendanceController);
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendance.controller.js.map