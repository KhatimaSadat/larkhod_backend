"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const custom_validation_1 = require("./custom.validation");
const create = {
    body: joi_1.default.object().keys({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().required().email(),
        image: joi_1.default.string().required(),
        phone: joi_1.default.string().required(),
        password: joi_1.default.string().required().custom(custom_validation_1.password),
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
        name: joi_1.default.string().optional(),
        email: joi_1.default.string().optional().email(),
        image: joi_1.default.string().optional(),
        phone: joi_1.default.string().optional(),
    })
        .min(1),
};
const deleteById = {
    params: joi_1.default.object().keys({
        id: joi_1.default.string().required().custom(custom_validation_1.objectId),
    }),
};
const updateMe = {
    body: joi_1.default.object()
        .keys({
        name: joi_1.default.string().optional(),
        image: joi_1.default.string().optional(),
        phone: joi_1.default.string().optional(),
    })
        .min(1),
};
exports.default = {
    create,
    getById,
    updateById,
    deleteById,
    updateMe,
};
//# sourceMappingURL=user.validation.js.map