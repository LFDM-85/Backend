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
exports.LecturesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lecture_entity_1 = require("./entities/lecture.entity");
let LecturesService = class LecturesService {
    constructor(lectureModel) {
        this.lectureModel = lectureModel;
    }
    async create(createLectureDto) {
        const { _id } = createLectureDto;
        const findOneLecture = await this.lectureModel.findOne({ _id });
        if (findOneLecture)
            throw new common_1.BadRequestException('Lecture already exist!');
        return await (await this.lectureModel.create(createLectureDto)).save();
    }
    findAll() {
        return this.lectureModel.find();
    }
    async update(id, updateLectureDto) {
        return await this.lectureModel.findByIdAndUpdate({
            _id: id,
        }, {
            $push: updateLectureDto
        }, { new: true });
        ;
    }
    async remove(id) {
        return this.lectureModel.deleteOne({ id }).exec();
    }
};
LecturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lecture_entity_1.Lecture.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LecturesService);
exports.LecturesService = LecturesService;
//# sourceMappingURL=lectures.service.js.map