"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constants_1 = require("./constants");
const dotenv = require("dotenv");
dotenv.config();
exports.CloudinaryProvider = {
    provide: constants_1.CLOUDINARY,
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'dp9h6rkbl',
            api_key: '826935283429225',
            api_secret: 'SbRPB6QR8kugfP4qCm-LQDRvcl0',
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map