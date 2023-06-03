"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const fileMeta = {
    body: joi_1.default.object().keys({
        path: joi_1.default.string().required(),
        contentType: joi_1.default.string().required(),
        fileFormat: joi_1.default.string().required(),
    }),
};
exports.default = {
    fileMeta,
};
//# sourceMappingURL=upload.validation.js.map