"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const custom_validation_1 = require("./custom.validation");
const register = {
    body: joi_1.default.object().keys({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().required().email(),
        image: joi_1.default.string().optional(),
        phone: joi_1.default.string().optional(),
        password: joi_1.default.string().required().custom(custom_validation_1.password),
    }),
};
// const register = {
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().custom(password),
//   }),
// };
const login = {
    body: joi_1.default.object().keys({
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    }),
};
const refreshTokens = {
    body: joi_1.default.object().keys({
        refreshToken: joi_1.default.string().required(),
    }),
};
const changePassword = {
    body: joi_1.default.object().keys({
        currentPassword: joi_1.default.string().required(),
        password: joi_1.default.string().required().custom(custom_validation_1.password),
    }),
};
const forgotPassword = {
    body: joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
    }),
};
const resetPassword = {
    query: joi_1.default.object().keys({
        token: joi_1.default.string().required(),
    }),
    body: joi_1.default.object().keys({
        password: joi_1.default.string().required().custom(custom_validation_1.password),
    }),
};
const verifyEmail = {
    query: joi_1.default.object().keys({
        token: joi_1.default.string().required(),
    }),
};
exports.default = {
    register,
    login,
    refreshTokens,
    forgotPassword,
    resetPassword,
    verifyEmail,
    changePassword,
};
//# sourceMappingURL=auth.validation.js.map