"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const dotenv = require("dotenv");
const throttler_1 = require("@nestjs/throttler");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const class_module_1 = require("./class/class.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./roleGuards/roles.guard");
const lectures_module_1 = require("./lectures/lectures.module");
const assessments_module_1 = require("./assessments/assessments.module");
const work_module_1 = require("./work/work.module");
const attendance_module_1 = require("./attendance/attendance.module");
dotenv.config();
const URL = process.env.DATABASE_URL;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(URL),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'client'),
            }),
            class_module_1.ClassModule,
            lectures_module_1.LecturesModule,
            assessments_module_1.AssessmentsModule,
            work_module_1.WorkModule,
            attendance_module_1.AttendanceModule,
        ],
        controllers: [],
        providers: [{
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map