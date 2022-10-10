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
exports.WorkController = void 0;
const common_1 = require("@nestjs/common");
const work_service_1 = require("./work.service");
const update_work_dto_1 = require("./dto/update-work.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = require("cloudinary");
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: async (req, file, cb) => {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/works',
            filename: (req, file, cb) => {
                const filename = new Date().toISOString() + '-' + file.originalname;
                cb(null, filename);
            }
        });
    }
});
let WorkController = class WorkController {
    constructor(workService) {
        this.workService = workService;
    }
    findAll() {
        return this.workService.findAll();
    }
    uploadFile(res, file) {
        console.log('file', file);
        this.workService.uploadFileToCloudinary(file);
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            path: file.path,
            filename: new Date().toISOString() + '-' + file.filename
        });
    }
    findFile(fileId, res) {
        return res.sendFile(cloudinary_1.v2.utils.download_archive_url(fileId));
    }
    update(id, updateWorkDto) {
        return this.workService.update(id, updateWorkDto);
    }
    addUser(userId, workId) {
        return this.workService.addUser(userId, workId);
    }
    removeUser(userId, workId) {
        return this.workService.removeUser(userId, workId);
    }
    getUser(workId) {
        return this.workService.getUsers(workId);
    }
    remove(id) {
        return this.workService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/uploadfile'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('/download/:fileId'),
    __param(0, (0, common_1.Param)('fileId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "findFile", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_work_dto_1.UpdateWorkDto]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/:id/add-user/:workId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('workId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "addUser", null);
__decorate([
    (0, common_1.Patch)('/:id/remove-user/:workId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('workId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Get)('/:workId/users'),
    __param(0, (0, common_1.Param)('workId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "getUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "remove", null);
WorkController = __decorate([
    (0, common_1.Controller)('work'),
    __metadata("design:paramtypes", [work_service_1.WorkService])
], WorkController);
exports.WorkController = WorkController;
//# sourceMappingURL=work.controller.js.map