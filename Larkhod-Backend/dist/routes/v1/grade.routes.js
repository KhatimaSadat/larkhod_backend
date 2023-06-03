"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const controllers_1 = require("../../controllers");
const validations_1 = require("../../validations");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, auth_1.default)(), (0, validate_1.default)(validations_1.gradeValidation.create), controllers_1.gradeController.create)
    .get(controllers_1.gradeController.query);
router
    .route("/:id")
    .get((0, auth_1.default)(), (0, validate_1.default)(validations_1.gradeValidation.getById), controllers_1.gradeController.getById)
    .put((0, validate_1.default)(validations_1.gradeValidation.updateById), controllers_1.gradeController.updateById)
    .delete((0, auth_1.default)(), (0, validate_1.default)(validations_1.gradeValidation.deleteById), controllers_1.gradeController.deleteById);
exports.default = router;
//# sourceMappingURL=grade.routes.js.map