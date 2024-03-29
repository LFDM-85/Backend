"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttendanceDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_attendance_dto_1 = require("./create-attendance.dto");
class UpdateAttendanceDto extends (0, mapped_types_1.PartialType)(create_attendance_dto_1.CreateAttendanceDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAttendanceDto = UpdateAttendanceDto;
//# sourceMappingURL=update-attendance.dto.js.map