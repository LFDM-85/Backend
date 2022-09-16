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
exports.ClassUserController = void 0;
const common_1 = require("@nestjs/common");
const class_user_service_1 = require("./class_user.service");
const create_class_user_dto_1 = require("./dto/create-class_user.dto");
const update_class_user_dto_1 = require("./dto/update-class_user.dto");
let ClassUserController = class ClassUserController {
    constructor(classUserService) {
        this.classUserService = classUserService;
    }
    create(createClassUserDto) {
        return this.classUserService.create(createClassUserDto);
    }
    findAll() {
        return this.classUserService.findAll();
    }
    findOne(id) {
        return this.classUserService.findOne(+id);
    }
    update(id, updateClassUserDto) {
        return this.classUserService.update(+id, updateClassUserDto);
    }
    remove(id) {
        return this.classUserService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_user_dto_1.CreateClassUserDto]),
    __metadata("design:returntype", void 0)
], ClassUserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassUserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_class_user_dto_1.UpdateClassUserDto]),
    __metadata("design:returntype", void 0)
], ClassUserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassUserController.prototype, "remove", null);
ClassUserController = __decorate([
    (0, common_1.Controller)('class-user'),
    __metadata("design:paramtypes", [class_user_service_1.ClassUserService])
], ClassUserController);
exports.ClassUserController = ClassUserController;
//# sourceMappingURL=class_user.controller.js.map