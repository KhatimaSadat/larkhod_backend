"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const user_validation_1 = __importDefault(require("../../validations/user.validation"));
const router = express_1.default.Router();
router
    .route("/me")
    .put((0, auth_1.default)(), (0, validate_1.default)(user_validation_1.default.updateMe), user_controller_1.default.updateMe);
router
    .route("/")
    .post((0, auth_1.default)(), (0, validate_1.default)(user_validation_1.default.create), user_controller_1.default.create)
    .get(user_controller_1.default.query);
router
    .route("/:id")
    .get((0, auth_1.default)(), (0, validate_1.default)(user_validation_1.default.getById), user_controller_1.default.getById)
    .put((0, validate_1.default)(user_validation_1.default.updateById), user_controller_1.default.updateById)
    .delete((0, auth_1.default)(), (0, validate_1.default)(user_validation_1.default.deleteById), user_controller_1.default.deleteById);
exports.default = router;
//# sourceMappingURL=user.routes.js.map