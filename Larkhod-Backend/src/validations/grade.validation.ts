import Joi from "joi";
import { objectId } from "./custom.validation";

const create = {
  body: Joi.object().keys({
    lable: Joi.string().required(),
    grade_path: Joi.string().required(),
  }),
};

const getById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      lable: Joi.string().optional(),
    grade_path: Joi.string().optional(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

export default {
  create,
  getById,
  updateById,
  deleteById,
};
