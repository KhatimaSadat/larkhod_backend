"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const validate_1 = __importDefault(require("../../middlewares/validate"));
const validations_1 = require("../../validations");
const router = express_1.default.Router();
router.post("/", (0, validate_1.default)(validations_1.uploadValidation.fileMeta), controllers_1.uploadController.getFileUploadUrl);
exports.default = router;
//# sourceMappingURL=upload.routes.js.map