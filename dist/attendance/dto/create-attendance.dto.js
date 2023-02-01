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
exports.CreateAttendanceDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAttendanceDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { attendance: { required: true, type: () => Boolean }, validation: { required: true, type: () => Boolean }, filename: { required: true, type: () => String }, filepath: { required: true, type: () => String }, owner: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'Is the state of the presence of the student in the lecture.',
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateAttendanceDto.prototype, "attendance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'false',
        description: 'Is the validation state of the presence of the student in the lecture. It is given by the teacher.',
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateAttendanceDto.prototype, "validation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'filenameExample',
        description: 'The name that the user gives to the file that will be uploaded',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '/parentfolder/filenameExample',
        description: 'Is the location of the file that the user will upload',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "filepath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'johnDoe@xyz.com',
        description: 'Is the user email that will be associated to the file. Is the owner of the file',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "owner", void 0);
exports.CreateAttendanceDto = CreateAttendanceDto;
//# sourceMappingURL=create-attendance.dto.js.map