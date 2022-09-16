"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_class_user_dto_1 = require("./create-class_user.dto");
class UpdateClassUserDto extends (0, mapped_types_1.PartialType)(create_class_user_dto_1.CreateClassUserDto) {
}
exports.UpdateClassUserDto = UpdateClassUserDto;
//# sourceMappingURL=update-class_user.dto.js.map