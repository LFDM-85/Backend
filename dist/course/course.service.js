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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const course_schema_1 = require("./schema/course.schema");
let CourseService = class CourseService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async create(nameCourse, open) {
        const findOneCourse = await this.courseModel.findOne({ nameCourse });
        if (findOneCourse)
            throw new common_1.BadRequestException('Course already exist!');
        const oneCourse = await this.courseModel.create({ nameCourse, open });
        return oneCourse.save();
    }
    async findAll() {
        return this.courseModel.find().populate('user', 'lecture');
    }
    async findOne(nameCourse) {
        if (!nameCourse)
            throw new common_1.BadRequestException(`Class with this name: ${nameCourse} does not exist!`);
        return this.courseModel.findOne({ nameCourse }).exec();
    }
    async findId(id) {
        if (!id)
            throw new common_1.BadRequestException(`Course with this name: ${id} does not exist!`);
        return this.courseModel.findOne({ id }).exec();
    }
    async update(id, updateCourseDto) {
        return await this.courseModel.findByIdAndUpdate({
            _id: id,
        }, {
            $addToSet: { updateCourseDto },
        }, { new: true });
    }
    async addUser(userId, courseId) {
        return this.courseModel.findByIdAndUpdate(courseId, { $set: { user: userId } }, { new: true });
    }
    async removeUser(userId, courseId) {
        return this.courseModel.findByIdAndUpdate(courseId, { $pull: { user: userId } }, { new: true });
    }
    async getUsers(courseId) {
        return await this.courseModel.findById(courseId).populate('user');
    }
    async addLecture(lectureId, courseId) {
        return this.courseModel.findByIdAndUpdate(courseId, { $set: { lecture: lectureId } }, { new: false });
    }
    async removeLecture(lectureId, courseId) {
        return this.courseModel.findByIdAndUpdate(courseId, { $pull: { lecture: lectureId } }, { new: true });
    }
    async getLectures(courseId) {
        return await this.courseModel.findById(courseId).populate('lecture');
    }
    async remove(nameCourse) {
        return this.courseModel.deleteOne({ nameCourse }).exec();
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(course_schema_1.Course.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map