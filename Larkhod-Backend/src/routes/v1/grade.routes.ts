import express from "express";
import auth from "../../middlewares/auth";
import validate from "../../middlewares/validate";
import { gradeController } from "../../controllers";
import { gradeValidation } from "../../validations";

const router = express.Router();

router
  .route("/")
  .post(auth(), validate(gradeValidation.create), gradeController.create)
  .get(gradeController.query);

router
  .route("/:id")
  .get(auth(), validate(gradeValidation.getById), gradeController.getById)
  .put(validate(gradeValidation.updateById), gradeController.updateById)
  .delete(
    auth(),
    validate(gradeValidation.deleteById),
    gradeController.deleteById
  );

export default router;
