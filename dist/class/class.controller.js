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
exports.ClassController = void 0;
const common_1 = require("@nestjs/common");
const class_service_1 = require("./class.service");
const create_class_dto_1 = require("./dto/create-class.dto");
const update_class_dto_1 = require("./dto/update-class.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const role_enum_1 = require("../enums/role.enum");
let ClassController = class ClassController {
    constructor(classService) {
        this.classService = classService;
    }
    create(createClassDto) {
        return this.classService.create(createClassDto.nameClass, createClassDto.open);
    }
    findAll() {
        return this.classService.findAll();
    }
    findOne(name) {
        return this.classService.findOne(name);
    }
    update(id, updateClassDto) {
        return this.classService.update(id, updateClassDto);
    }
    addClass(userId, classId) {
        return this.classService.addUser(userId, classId);
    }
    removeClass(userId, classId) {
        return this.classService.removeUser(userId, classId);
    }
    getClasses(classId) {
        return this.classService.getUsers(classId);
    }
    addLecture(lectureId, classId) {
        return this.classService.addLecture(lectureId, classId);
    }
    removeLecture(lectureId, classId) {
        return this.classService.removeLecture(lectureId, classId);
    }
    getLectures(classId) {
        return this.classService.getLectures(classId);
    }
    remove(name) {
        return this.classService.remove(name);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.CreateClassDto]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_class_dto_1.UpdateClassDto]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/:id/add-user/:classId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "addClass", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-user/:classId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "removeClass", null);
__decorate([
    (0, common_1.Get)('/:classId/users'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "getClasses", null);
__decorate([
    (0, common_1.Patch)('/:lectureId/add-lecture/:classId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Professor),
    __param(0, (0, common_1.Param)('lectureId')),
    __param(1, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "addLecture", null);
__decorate([
    (0, common_1.Patch)('/:lectureId/remove-lecture/:classId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Professor),
    __param(0, (0, common_1.Param)('lectureId')),
    __param(1, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "removeLecture", null);
__decorate([
    (0, common_1.Get)('/:classId/lectures'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "getLectures", null);
__decorate([
    (0, common_1.Delete)('/:name'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "remove", null);
ClassController = __decorate([
    (0, common_1.Controller)('class'),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassController);
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map