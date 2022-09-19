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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_schema_1 = require("./schema/class.schema");
const users_service_1 = require("../users/users.service");
let ClassService = class ClassService {
    constructor(classModel, userService) {
        this.classModel = classModel;
        this.userService = userService;
    }
    async create(nameClass, open) {
        const findOneClass = await this.classModel.findOne({ nameClass });
        if (findOneClass)
            throw new common_1.BadRequestException('Class already exist!');
        const oneClass = await this.classModel.create({ nameClass, open });
        return oneClass.save();
    }
    async findAll() {
        return this.classModel.find().populate('user');
    }
    async findOne(nameClass) {
        if (!nameClass)
            throw new common_1.BadRequestException((`Class with this name: ${nameClass} does not exist!`));
        return this.classModel.findOne({ nameClass }).exec();
    }
    async update(id, updateClassDto, users) {
        const { email } = users;
        const user = await this.userService.findEmail(email);
        return await this.classModel.findByIdAndUpdate({
            _id: id,
        }, {
            $push: { user: user }
        }, { new: true });
    }
    async remove(nameClass) {
        return this.classModel.deleteOne({ nameClass }).exec();
    }
};
ClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(class_schema_1.Class.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, users_service_1.UsersService])
], ClassService);
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map