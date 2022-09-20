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
exports.LecturesController = void 0;
const common_1 = require("@nestjs/common");
const lectures_service_1 = require("./lectures.service");
const create_lecture_dto_1 = require("./dto/create-lecture.dto");
const update_lecture_dto_1 = require("./dto/update-lecture.dto");
let LecturesController = class LecturesController {
    constructor(lecturesService) {
        this.lecturesService = lecturesService;
    }
    create(createLectureDto) {
        return this.lecturesService.create(createLectureDto);
    }
    findAll() {
        return this.lecturesService.findAll().populate('assessment');
    }
    update(id, updateLectureDto) {
        return this.lecturesService.update(id, updateLectureDto);
    }
    addClass(assessmentId, lectureId) {
        return this.lecturesService.addAssessment(assessmentId, lectureId);
    }
    removeClass(assessmentId, lectureId) {
        return this.lecturesService.removeAssessment(assessmentId, lectureId);
    }
    getClasses(lectureId) {
        return this.lecturesService.getAssessment(lectureId);
    }
    remove(id) {
        return this.lecturesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lecture_dto_1.CreateLectureDto]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lecture_dto_1.UpdateLectureDto]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/:assessmentId/add-assessment/:lectureId'),
    __param(0, (0, common_1.Param)('assessmentId')),
    __param(1, (0, common_1.Param)('lectureId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "addClass", null);
__decorate([
    (0, common_1.Patch)('/:assessmentId/remove-assessment/:lectureId'),
    __param(0, (0, common_1.Param)('assessmentId')),
    __param(1, (0, common_1.Param)('lectureId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "removeClass", null);
__decorate([
    (0, common_1.Get)('/:classId/assessment'),
    __param(0, (0, common_1.Param)('lectureId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "getClasses", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "remove", null);
LecturesController = __decorate([
    (0, common_1.Controller)('lectures'),
    __metadata("design:paramtypes", [lectures_service_1.LecturesService])
], LecturesController);
exports.LecturesController = LecturesController;
//# sourceMappingURL=lectures.controller.js.map