"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = exports.gradeController = exports.bookController = exports.userController = exports.authController = void 0;
var auth_controller_1 = require("./auth.controller");
Object.defineProperty(exports, "authController", { enumerable: true, get: function () { return __importDefault(auth_controller_1).default; } });
var user_controller_1 = require("./user.controller");
Object.defineProperty(exports, "userController", { enumerable: true, get: function () { return __importDefault(user_controller_1).default; } });
var book_controller_1 = require("./book.controller");
Object.defineProperty(exports, "bookController", { enumerable: true, get: function () { return __importDefault(book_controller_1).default; } });
var grade_controller_1 = require("./grade.controller");
Object.defineProperty(exports, "gradeController", { enumerable: true, get: function () { return __importDefault(grade_controller_1).default; } });
var upload_controller_1 = require("./upload.controller");
Object.defineProperty(exports, "uploadController", { enumerable: true, get: function () { return __importDefault(upload_controller_1).default; } });
//# sourceMappingURL=index.js.map