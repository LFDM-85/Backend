"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceModule = void 0;
const common_1 = require("@nestjs/common");
const attendance_service_1 = require("./attendance.service");
const attendance_controller_1 = require("./attendance.controller");
const lectures_module_1 = require("../lectures/lectures.module");
const mongoose_1 = require("@nestjs/mongoose");
const attendance_schema_1 = require("./schema/attendance.schema");
const platform_express_1 = require("@nestjs/platform-express");
let AttendanceModule = class AttendanceModule {
};
AttendanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({ dest: 'uploads/attendance' }),
            lectures_module_1.LecturesModule,
            mongoose_1.MongooseModule.forFeature([
                { name: attendance_schema_1.Attendance.name, schema: attendance_schema_1.AttendanceSchema },
            ]),
        ],
        controllers: [attendance_controller_1.AttendanceController],
        providers: [attendance_service_1.AttendanceService],
    })
], AttendanceModule);
exports.AttendanceModule = AttendanceModule;
//# sourceMappingURL=attendance.module.js.map