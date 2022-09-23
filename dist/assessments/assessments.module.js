"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssessmentsModule = void 0;
const common_1 = require("@nestjs/common");
const assessments_service_1 = require("./assessments.service");
const assessments_controller_1 = require("./assessments.controller");
const lectures_module_1 = require("../lectures/lectures.module");
const mongoose_1 = require("@nestjs/mongoose");
const assessments_schema_1 = require("./schema/assessments.schema");
const platform_express_1 = require("@nestjs/platform-express");
let AssessmentsModule = class AssessmentsModule {
};
AssessmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            lectures_module_1.LecturesModule,
            platform_express_1.MulterModule.register({ dest: './uploads/attendance/' }),
            mongoose_1.MongooseModule.forFeature([
                { name: assessments_schema_1.Assessment.name, schema: assessments_schema_1.AssessmentSchema },
            ]),
        ],
        controllers: [assessments_controller_1.AssessmentsController],
        providers: [assessments_service_1.AssessmentsService],
    })
], AssessmentsModule);
exports.AssessmentsModule = AssessmentsModule;
//# sourceMappingURL=assessments.module.js.map