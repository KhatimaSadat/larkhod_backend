"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const moment_1 = __importDefault(require("moment"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config/config"));
const user_service_1 = __importDefault(require("./user.service"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const tokens_1 = require("../config/tokens");
const generateToken = (userId, expires, type, secret = config_1.default.jwt.secret) => {
    const payload = {
        id: userId,
        iat: (0, moment_1.default)().unix(),
        exp: expires.unix(),
        type,
    };
    return jsonwebtoken_1.default.sign(payload, secret);
};
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = jsonwebtoken_1.default.verify(token, config_1.default.jwt.secret);
    if (!payload) {
        throw new Error("Token is invalid");
    }
    return payload;
});
const generateAuthTokens = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const accessTokenExpires = (0, moment_1.default)().add(config_1.default.jwt.accessExpirationMinutes, "minutes");
    const accessToken = generateToken(user._id, accessTokenExpires, tokens_1.tokenTypes.ACCESS);
    return accessToken;
});
const generateResetPasswordToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.getByEmail(email);
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "No users found with this email");
    }
    const expires = (0, moment_1.default)().add(config_1.default.jwt.resetPasswordExpirationMinutes, "minutes");
    const resetPasswordToken = generateToken(user._id, expires, tokens_1.tokenTypes.RESET_PASSWORD);
    return resetPasswordToken;
});
const generateVerifyEmailToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const expires = (0, moment_1.default)().add(config_1.default.jwt.verifyEmailExpirationMinutes, "minutes");
    const verifyEmailToken = generateToken(email, expires, tokens_1.tokenTypes.VERIFY_EMAIL);
    return verifyEmailToken;
});
exports.default = {
    generateToken,
    verifyToken,
    generateAuthTokens,
    generateResetPasswordToken,
    generateVerifyEmailToken,
};
//# sourceMappingURL=token.service.js.map