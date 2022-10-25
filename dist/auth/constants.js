"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.jwtConstants = {
    secret: process.env.JWTCONSTANTS,
};
//# sourceMappingURL=constants.js.map