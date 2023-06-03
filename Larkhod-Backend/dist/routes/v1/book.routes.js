"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const validations_1 = require("../../validations");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, auth_1.default)(), (0, validate_1.default)(validations_1.bookValidation.create), controllers_1.bookController.create)
    .get(controllers_1.bookController.query);
router
    .route("/:id")
    .get((0, auth_1.default)(), (0, validate_1.default)(validations_1.bookValidation.getById), controllers_1.bookController.getById)
    .put((0, validate_1.default)(validations_1.bookValidation.updateById), controllers_1.bookController.updateById)
    .delete((0, auth_1.default)(), (0, validate_1.default)(validations_1.bookValidation.deleteById), controllers_1.bookController.deleteById);
exports.default = router;
//# sourceMappingURL=book.routes.js.map