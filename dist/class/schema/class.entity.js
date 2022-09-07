"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = exports.ClassSchema = void 0;
const mongoose = require("mongoose");
exports.ClassSchema = new mongoose.Schema({
    name: { type: String, required: true },
    open: { type: String, required: false },
});
class Class {
}
exports.Class = Class;
//# sourceMappingURL=class.entity.js.map