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
const users_schema_1 = require("./schema/users.schema");
let UsersService = class UsersService {
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    async create(createUserDto) {
        const createdUser = new this.usersModel(createUserDto);
        return createdUser.save();
    }
    async findAll() {
        return await this.usersModel.find().populate({
            path: 'classes', populate: [{
                    path: 'lecture', populate: [{ path: 'assessment' }, { path: 'work' }, { path: 'attendance' }],
                }],
        }).exec();
    }
    async findEmail(email) {
        return await this.usersModel.findOne({ email }).populate({
            path: 'classes', populate: [{
                    path: 'lecture', populate: [{ path: 'assessment' }, { path: 'work' }, { path: 'attendance' }],
                }],
        }).exec();
    }
    async whoami(email) {
        return await this.usersModel.findOne({ email }).exec();
    }
    async update(id, updateUserDto) {
        return await this.usersModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
    async addClass(userId, classId) {
        return this.usersModel.findByIdAndUpdate(userId, { $set: { classes: classId } }, { new: true });
    }
    async removeClass(userId, classId) {
        return this.usersModel.findByIdAndUpdate(userId, { $pull: { classes: classId } }, { new: true });
    }
    async getClasses(email) {
        const user = await this.usersModel.findOne({ email }).populate('classes');
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
    async getAssessment(email) {
        const user = await this.usersModel.findOne({ email });
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
        return await this.usersModel.findByIdAndDelete(id).exec();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map