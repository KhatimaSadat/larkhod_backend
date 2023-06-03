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
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../Models/User"));
const create = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield getByEmail(reqBody.email)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Email already taken");
    }
    const hashPass = yield bcryptjs_1.default.hashSync(reqBody.password);
    return yield User_1.default.create(Object.assign(Object.assign({}, reqBody), { password: hashPass }));
});
const query = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.find();
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.findById(id);
});
const getByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.findOne({ email: email });
});
const updateById = (userId, updateBody) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByIdAndUpdate(userId, updateBody, { new: true });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    return user;
});
const deleteById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getById(userId);
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    yield User_1.default.findByIdAndRemove(userId);
    return user;
});
exports.default = {
    create,
    query,
    getById,
    getByEmail,
    updateById,
    deleteById,
};
//# sourceMappingURL=user.service.js.map