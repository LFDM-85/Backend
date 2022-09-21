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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const bcrypt_1 = require("../utils/bcrypt");
let UsersService = class UsersService {
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    async create(createUserDto) {
        const { email, password } = createUserDto;
        const users = await this.usersModel.find({ email });
        if (users.length)
            throw new common_1.BadRequestException('Email in use');
        createUserDto.password = (0, bcrypt_1.encodePassword)(password);
        const user = await this.usersModel.create(createUserDto);
        return user.save();
    }
    async findAll() {
        return await this.usersModel.find().populate('classes', 'lecture').exec();
    }
    async findOne(condition) {
        if (!condition) {
            return null;
        }
        return await this.usersModel.findOne(condition).exec();
    }
    async findEmail(email) {
        return await this.usersModel.findOne({ email }).exec();
    }
    async whoami(email) {
        return await this.usersModel.findOne({ email }).exec();
    }
    async update(id, updateUserDto) {
        return await this.usersModel.findByIdAndUpdate({
            _id: id,
        }, {
            $set: updateUserDto,
        }, {
            new: true
        });
    }
    async addClass(userId, classId) {
        return this.usersModel.findByIdAndUpdate(userId, { $addToSet: { classes: classId } }, { new: true });
    }
    async removeClass(userId, classId) {
        return this.usersModel.findByIdAndUpdate(userId, { $pull: { classes: classId } }, { new: true });
    }
    async getClasses(userId) {
        const user = await this.usersModel.findById(userId).populate('classes');
        return user;
    }
    async addWork(userId, workId) {
        return this.usersModel.findByIdAndUpdate(userId, { $addToSet: { work: workId } }, { new: true });
    }
    async removeWork(userId, workId) {
        return this.usersModel.findByIdAndUpdate(userId, { $pull: { work: workId } }, { new: true });
    }
    async getWork(userId) {
        const user = await this.usersModel.findById(userId).populate('work');
        return user;
    }
    async addAssessment(userId, assessmentId) {
        return this.usersModel.findByIdAndUpdate(userId, { $addToSet: { assessment: assessmentId } }, { new: true });
    }
    async removeAssessment(userId, assessmentId) {
        return this.usersModel.findByIdAndUpdate(userId, { $pull: { assessment: assessmentId } }, { new: true });
    }
    async getAssessment(userId) {
        const user = await this.usersModel.findById(userId).populate('assessment');
        return user;
    }
    async addAttendance(userId, attendanceId) {
        return this.usersModel.findByIdAndUpdate(userId, { $addToSet: { attendance: attendanceId } }, { new: true });
    }
    async removeAttendance(userId, attendanceId) {
        return this.usersModel.findByIdAndUpdate(userId, { $pull: { attendance: attendanceId } }, { new: true });
    }
    async getAttendance(userId) {
        const user = await this.usersModel.findById(userId).populate('attendance');
        return user;
    }
    async remove(id) {
        return await this.usersModel.deleteOne({
            _id: id
        }).exec();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_entity_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map