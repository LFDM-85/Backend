"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassSchema = void 0;
const mongoose = require("mongoose");
exports.ClassSchema = new mongoose.Schema({
    name: { type: String, required: true },
    open: { type: String, required: false },
});
//# sourceMappingURL=class.schema.js.map