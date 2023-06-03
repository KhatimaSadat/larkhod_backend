import express from "express";
import uploadRoute from "./upload.routes";
import userRoute from "./user.routes";
import bookRoute from "./book.routes";
import gradeRoute from "./grade.routes";
import authRoute from "./auth.routes";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/grade",
    route: gradeRoute,
  },
  {
    path: "/book",
    route: bookRoute,
  },
  {
    path: "/upload",
    route: uploadRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
