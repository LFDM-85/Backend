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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const update_user_dto_1 = require("./dto/update-user.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(createUserDto) {
        return await this.usersService.create(createUserDto);
    }
    async whoami(req) {
        return req.user;
    }
    findAllUsers() {
        return this.usersService.findAll();
    }
    findUser(email) {
        return this.usersService.findOne(email);
    }
    update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    addClass(userId, classId) {
        return this.usersService.addClass(userId, classId);
    }
    removeClass(userId, classId) {
        return this.usersService.removeClass(userId, classId);
    }
    getClasses(userId) {
        return this.usersService.getClasses(userId);
    }
    addWork(userId, workId) {
        return this.usersService.addWork(userId, workId);
    }
    removeWork(userId, workId) {
        return this.usersService.removeWork(userId, workId);
    }
    getWork(userId) {
        return this.usersService.getWork(userId);
    }
    addAssessment(userId, assessmentId) {
        return this.usersService.addAssessment(userId, assessmentId);
    }
    removeAssessment(userId, assessmentId) {
        return this.usersService.removeAssessment(userId, assessmentId);
    }
    getAssessment(userId) {
        return this.usersService.getAssessment(userId);
    }
    addAttendance(userId, attendanceId) {
        return this.usersService.addAttendance(userId, attendanceId);
    }
    removeAttendance(userId, attendanceId) {
        return this.usersService.removeAttendance(userId, attendanceId);
    }
    getAttendance(userId) {
        return this.usersService.getAttendance(userId);
    }
    delete(id) {
        return this.usersService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('/whoami'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "whoami", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUser", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/:id/add-class/:classId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addClass", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-class/:classId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeClass", null);
__decorate([
    (0, common_1.Get)('/:id/classes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getClasses", null);
__decorate([
    (0, common_1.Patch)('/:id/add-work/:workId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('workId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addWork", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-work/:workId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('workId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeWork", null);
__decorate([
    (0, common_1.Get)('/:id/works'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getWork", null);
__decorate([
    (0, common_1.Patch)('/:id/add-assessment/:assessmentId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('assessmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addAssessment", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-work/:assessmentId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('assessmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeAssessment", null);
__decorate([
    (0, common_1.Get)('/:id/assessments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAssessment", null);
__decorate([
    (0, common_1.Patch)('/:id/add-attendance/:attendanceId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('attendanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addAttendance", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-attendance/:attendanceId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('attendanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeAttendance", null);
__decorate([
    (0, common_1.Get)('/:id/attendances'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAttendance", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
UsersController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map