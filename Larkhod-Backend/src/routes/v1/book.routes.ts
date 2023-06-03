import express from "express";
import { bookController } from "../../controllers";
import auth from "../../middlewares/auth";
import validate from "../../middlewares/validate";
import { bookValidation } from "../../validations";

const router = express.Router();

router
  .route("/")
  .post(auth(), validate(bookValidation.create), bookController.create)
  .get(bookController.query);

router
  .route("/:id")
  .get(auth(), validate(bookValidation.getById), bookController.getById)
  .put(validate(bookValidation.updateById), bookController.updateById)
  .delete(
    auth(),
    validate(bookValidation.deleteById),
    bookController.deleteById
  );

export default router;
