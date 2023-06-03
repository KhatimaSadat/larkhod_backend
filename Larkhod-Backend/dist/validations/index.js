"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeValidation = exports.bookValidation = exports.uploadValidation = exports.userValidation = exports.authValidation = void 0;
var auth_validation_1 = require("./auth.validation");
Object.defineProperty(exports, "authValidation", { enumerable: true, get: function () { return __importDefault(auth_validation_1).default; } });
var user_validation_1 = require("./user.validation");
Object.defineProperty(exports, "userValidation", { enumerable: true, get: function () { return __importDefault(user_validation_1).default; } });
var upload_validation_1 = require("./upload.validation");
Object.defineProperty(exports, "uploadValidation", { enumerable: true, get: function () { return __importDefault(upload_validation_1).default; } });
var book_validation_1 = require("./book.validation");
Object.defineProperty(exports, "bookValidation", { enumerable: true, get: function () { return __importDefault(book_validation_1).default; } });
var grade_validation_1 = require("./grade.validation");
Object.defineProperty(exports, "gradeValidation", { enumerable: true, get: function () { return __importDefault(grade_validation_1).default; } });
//# sourceMappingURL=index.js.map