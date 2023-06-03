"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const auth_validation_1 = __importDefault(require("../../validations/auth.validation"));
const auth_controller_1 = __importDefault(require("../../controllers/auth.controller"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post("/register", (0, validate_1.default)(auth_validation_1.default.register), auth_controller_1.default.register);
router.post("/login", (0, validate_1.default)(auth_validation_1.default.login), auth_controller_1.default.login);
router.get("/user", (0, auth_1.default)(), auth_controller_1.default.getAuthUser);
router.post("/forgot-password", (0, validate_1.default)(auth_validation_1.default.forgotPassword), auth_controller_1.default.forgotPassword);
router.post("/change-password", (0, auth_1.default)(), (0, validate_1.default)(auth_validation_1.default.changePassword), auth_controller_1.default.changePassword);
router.post("/reset-password", (0, validate_1.default)(auth_validation_1.default.resetPassword), auth_controller_1.default.resetPassword);
router.post("/send-verification-email", (0, auth_1.default)(), auth_controller_1.default.sendVerificationEmail);
router.post("/verify-email", (0, validate_1.default)(auth_validation_1.default.verifyEmail), auth_controller_1.default.verifyEmail);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map