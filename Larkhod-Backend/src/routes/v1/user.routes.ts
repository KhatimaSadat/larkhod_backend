import express from "express";
import userController from "../../controllers/user.controller";
import auth from "../../middlewares/auth";
import validate from "../../middlewares/validate";
import userValidation from "../../validations/user.validation";

const router = express.Router();

router
  .route("/me")
  .put(auth(), validate(userValidation.updateMe), userController.updateMe);

router
  .route("/")
  .post(auth(), validate(userValidation.create), userController.create)
  .get(userController.query);

router
  .route("/:id")
  .get(auth(), validate(userValidation.getById), userController.getById)
  .put(validate(userValidation.updateById), userController.updateById)
  .delete(
    auth(),
    validate(userValidation.deleteById),
    userController.deleteById
  );

export default router;
