"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const custom_validation_1 = require("./custom.validation");
const create = {
    body: joi_1.default.object().keys({
        label: joi_1.default.string().required(),
        subject_path: joi_1.default.string().required(),
        download_pdf: joi_1.default.string().required(),
        parts: joi_1.default.array().required(),
    }),
};
const getById = {
    params: joi_1.default.object().keys({
        id: joi_1.default.string().required().custom(custom_validation_1.objectId),
    }),
};
const updateById = {
    params: joi_1.default.object().keys({
        id: joi_1.default.string().required().custom(custom_validation_1.objectId),
    }),
    body: joi_1.default.object()
        .keys({
        label: joi_1.default.string().optional(),
        subject_path: joi_1.default.string().optional(),
        download_pdf: joi_1.default.string().optional(),
        parts: joi_1.default.array().optional(),
    })
        .min(1),
};
const deleteById = {
    params: joi_1.default.object().keys({
        id: joi_1.default.string().required().custom(custom_validation_1.objectId),
    }),
};
exports.default = {
    create,
    getById,
    updateById,
    deleteById,
};
//# sourceMappingURL=book.validation.js.map