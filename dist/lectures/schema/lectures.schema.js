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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LectureSchema = exports.Lecture = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const assessment_entity_1 = require("../../assessments/entities/assessment.entity");
const attendance_entity_1 = require("../../attendance/entities/attendance.entity");
const work_entity_1 = require("../../work/entities/work.entity");
let Lecture = class Lecture {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", String)
], Lecture.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Lecture.prototype, "summary", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Lecture.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Lecture.prototype, "finished", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: { type: mongoose_2.default.Schema.Types.ObjectId, ref: assessment_entity_1.Assessment.name } }),
    __metadata("design:type", assessment_entity_1.Assessment)
], Lecture.prototype, "assessment", void 0);
__decorate([
    (0, mongoose_1.Prop)(({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: work_entity_1.Work.name }] })),
    __metadata("design:type", Array)
], Lecture.prototype, "work", void 0);
__decorate([
    (0, mongoose_1.Prop)(({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: attendance_entity_1.Attendance.name }] })),
    __metadata("design:type", attendance_entity_1.Attendance)
], Lecture.prototype, "attendance", void 0);
Lecture = __decorate([
    (0, mongoose_1.Schema)()
], Lecture);
exports.Lecture = Lecture;
exports.LectureSchema = mongoose_1.SchemaFactory.createForClass(Lecture);
//# sourceMappingURL=lectures.schema.js.map