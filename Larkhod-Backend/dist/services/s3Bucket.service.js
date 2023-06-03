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
const superagent_1 = __importDefault(require("superagent"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const config_1 = __importDefault(require("../config/config"));
const S3 = new aws_sdk_1.default.S3(config_1.default.aws.credentials);
const signedUrlExpireSeconds = 60 * 500;
const getPutSignedUrl = (fileFullPath, contentType, expireInSeconds = signedUrlExpireSeconds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            Key: `${fileFullPath}`,
            Expires: expireInSeconds,
            ContentType: `${contentType}`,
            Bucket: config_1.default.aws.bucketName,
        };
        const url = yield S3.getSignedUrlPromise("putObject", params);
        return Promise.resolve(url);
    }
    catch (err) {
        return Promise.reject(err);
    }
});
const uploadFile = (fileFullPath, stream, contentType = `text/csv`) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signedUrl = yield getPutSignedUrl(fileFullPath, contentType);
        const response = yield superagent_1.default
            .put(signedUrl)
            .set("Content-Type", "application/octet-stream")
            .send(stream);
        return Promise.resolve(response);
    }
    catch (err) {
        return Promise.reject(err);
    }
});
const upload = (signedUrl, stream) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield superagent_1.default
            .put(signedUrl)
            .set("Content-Type", "application/octet-stream")
            .send(stream);
        return Promise.resolve(response);
    }
    catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
});
const getSignedObjectUrl = (filePath, expireInSeconds = signedUrlExpireSeconds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            Key: `${filePath}`,
            Expires: expireInSeconds,
            Bucket: config_1.default.aws.bucketName,
        };
        return Promise.resolve(yield S3.getSignedUrlPromise("getObject", params));
    }
    catch (err) {
        return Promise.reject(err);
    }
});
exports.default = { getPutSignedUrl, getSignedObjectUrl, upload, uploadFile };
//# sourceMappingURL=s3Bucket.service.js.map