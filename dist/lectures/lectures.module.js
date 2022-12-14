"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LecturesModule = void 0;
const common_1 = require("@nestjs/common");
const lectures_service_1 = require("./lectures.service");
const lectures_controller_1 = require("./lectures.controller");
const course_module_1 = require("../course/course.module");
const mongoose_1 = require("@nestjs/mongoose");
const lectures_schema_1 = require("./schema/lectures.schema");
let LecturesModule = class LecturesModule {
};
LecturesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            course_module_1.CourseModule,
            mongoose_1.MongooseModule.forFeature([{ name: lectures_schema_1.Lecture.name, schema: lectures_schema_1.LectureSchema }]),
        ],
        controllers: [lectures_controller_1.LecturesController],
        providers: [lectures_service_1.LecturesService],
    })
], LecturesModule);
exports.LecturesModule = LecturesModule;
//# sourceMappingURL=lectures.module.js.map