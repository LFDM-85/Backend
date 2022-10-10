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
exports.WorkSchema = exports.Work = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../../users/entities/user.entity");
let Work = class Work {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", String)
], Work.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Work.prototype, "filename", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Work.prototype, "filepath", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: user_entity_1.Users.name }] }) }),
    __metadata("design:type", Array)
], Work.prototype, "user", void 0);
Work = __decorate([
    (0, mongoose_1.Schema)()
], Work);
exports.Work = Work;
exports.WorkSchema = mongoose_1.SchemaFactory.createForClass(Work);
//# sourceMappingURL=work.schema.js.map