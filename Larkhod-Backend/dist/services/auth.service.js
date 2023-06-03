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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_status_1 = __importDefault(require("http-status"));
const User_1 = __importDefault(require("../Models/User"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const token_service_1 = __importDefault(require("./token.service"));
const user_service_1 = __importDefault(require("./user.service"));
const loginUserWithEmailAndPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.getByEmail(email);
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "No User Found");
    }
    const isPasswordMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Incorrect email or password");
    }
    return user;
});
const resetPassword = (token, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenPayload = (yield token_service_1.default.verifyToken(token));
        const user = yield user_service_1.default.getByEmail(tokenPayload.id);
        if (!user) {
            throw new Error();
        }
        const newHashPass = yield bcryptjs_1.default.hashSync(newPassword);
        const updateduser = yield User_1.default.findByIdAndUpdate(user._id, {
            $set: { password: newHashPass },
        });
        return yield updateduser.save();
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Please authenticate");
    }
});
const changePassword = (user, currentPassword, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const isPasswordMatch = yield bcryptjs_1.default.compare(currentPassword, user.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Incorrect password");
    }
    const newHashPass = bcryptjs_1.default.hashSync(newPassword);
    const updateduser = yield User_1.default.findByIdAndUpdate(user._id, {
        $set: { password: newHashPass },
    });
    return yield updateduser.save();
});
const verifyEmail = (verifyEmailToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verifyEmailTokenDoc = (yield token_service_1.default.verifyToken(verifyEmailToken));
        const user = yield user_service_1.default.getByEmail(verifyEmailTokenDoc.email);
        if (!user) {
            throw new Error();
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Email verification failed");
    }
});
exports.default = {
    loginUserWithEmailAndPassword,
    resetPassword,
    verifyEmail,
    changePassword,
};
//# sourceMappingURL=auth.service.js.map