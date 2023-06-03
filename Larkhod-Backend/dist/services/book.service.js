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
const Book_1 = __importDefault(require("../Models/Book"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const create = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Book_1.default.create(reqBody);
});
const query = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Book_1.default.find();
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Book_1.default.findById(id);
});
const updateById = (id, updateBody) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Book_1.default.findByIdAndUpdate(id, updateBody, { new: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not found");
    }
    return result;
});
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getById(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not found");
    }
    yield Book_1.default.findByIdAndRemove(id);
    return result;
});
exports.default = {
    create,
    query,
    getById,
    updateById,
    deleteById,
};
//# sourceMappingURL=book.service.js.map