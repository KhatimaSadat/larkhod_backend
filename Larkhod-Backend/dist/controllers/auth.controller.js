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
const http_status_1 = __importDefault(require("http-status"));
const services_1 = require("../services");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const register = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.userService.create(req.body);
    const token = yield services_1.tokenService.generateAuthTokens(user);
    res.status(http_status_1.default.CREATED).send({ user, token });
}));
const getAuthUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.userService.getById(req.user.id);
    const token = yield services_1.tokenService.generateAuthTokens(user);
    res.status(http_status_1.default.CREATED).send({ user, token });
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield services_1.authService.loginUserWithEmailAndPassword(email, password);
    const token = yield services_1.tokenService.generateAuthTokens(user);
    res.send({ user, token });
}));
const forgotPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resetPasswordToken = yield services_1.tokenService.generateVerifyEmailToken(req.body.email);
    const sendEmail = yield services_1.emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
    res.status(http_status_1.default.OK).send({ sendEmail });
}));
const changePassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.authService.changePassword(req.user, req.body.currentPassword, req.body.password);
    res.status(http_status_1.default.NO_CONTENT).send();
}));
const resetPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.authService.resetPassword(req.query.token, req.body.password);
    res.status(http_status_1.default.NO_CONTENT).send();
}));
const sendVerificationEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyEmailToken = yield services_1.tokenService.generateVerifyEmailToken(req.user.email);
    yield services_1.userService.getByEmail(req.user.email);
    yield services_1.emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
    res.status(http_status_1.default.NO_CONTENT).send();
}));
const verifyEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.authService.verifyEmail(req.query.token);
    res.status(http_status_1.default.NO_CONTENT).send();
}));
exports.default = {
    register,
    login,
    forgotPassword,
    resetPassword,
    sendVerificationEmail,
    verifyEmail,
    getAuthUser,
    changePassword,
};
//# sourceMappingURL=auth.controller.js.map