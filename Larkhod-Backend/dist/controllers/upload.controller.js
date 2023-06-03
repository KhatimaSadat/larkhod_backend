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
const getFileUploadUrl = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { path, fileFormat, contentType } = req.body;
        const filePath = `${path}/${Date.now()}.${fileFormat}`;
        const putUrl = yield services_1.s3BucketService.getPutSignedUrl(filePath, contentType);
        const getUrl = yield services_1.s3BucketService.getSignedObjectUrl(filePath);
        return res.status(http_status_1.default.OK).send({ path: filePath, putUrl, getUrl });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = {
    getFileUploadUrl,
};
//# sourceMappingURL=upload.controller.js.map