"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3BucketService = exports.gradeService = exports.bookService = exports.userService = exports.tokenService = exports.emailService = exports.authService = void 0;
var auth_service_1 = require("./auth.service");
Object.defineProperty(exports, "authService", { enumerable: true, get: function () { return __importDefault(auth_service_1).default; } });
var email_service_1 = require("./email.service");
Object.defineProperty(exports, "emailService", { enumerable: true, get: function () { return __importDefault(email_service_1).default; } });
var token_service_1 = require("./token.service");
Object.defineProperty(exports, "tokenService", { enumerable: true, get: function () { return __importDefault(token_service_1).default; } });
var user_service_1 = require("./user.service");
Object.defineProperty(exports, "userService", { enumerable: true, get: function () { return __importDefault(user_service_1).default; } });
var book_service_1 = require("./book.service");
Object.defineProperty(exports, "bookService", { enumerable: true, get: function () { return __importDefault(book_service_1).default; } });
var grade_service_1 = require("./grade.service");
Object.defineProperty(exports, "gradeService", { enumerable: true, get: function () { return __importDefault(grade_service_1).default; } });
var s3Bucket_service_1 = require("./s3Bucket.service");
Object.defineProperty(exports, "s3BucketService", { enumerable: true, get: function () { return __importDefault(s3Bucket_service_1).default; } });
//# sourceMappingURL=index.js.map