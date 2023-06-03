"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_routes_1 = __importDefault(require("./upload.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const book_routes_1 = __importDefault(require("./book.routes"));
const grade_routes_1 = __importDefault(require("./grade.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const router = express_1.default.Router();
const defaultRoutes = [
    {
        path: "/user",
        route: user_routes_1.default,
    },
    {
        path: "/auth",
        route: auth_routes_1.default,
    },
    {
        path: "/grade",
        route: grade_routes_1.default,
    },
    {
        path: "/book",
        route: book_routes_1.default,
    },
    {
        path: "/upload",
        route: upload_routes_1.default,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
//# sourceMappingURL=index.js.map