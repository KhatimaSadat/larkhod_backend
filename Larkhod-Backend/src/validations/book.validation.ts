import Joi from "joi";
import { objectId } from "./custom.validation";

const create = {
  body: Joi.object().keys({
    label: Joi.string().required(),
    subject_path: Joi.string().required(),
    download_pdf: Joi.string().required(),
    parts: Joi.array().required(),
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
      label: Joi.string().optional(),
    subject_path: Joi.string().optional(),
    download_pdf: Joi.string().optional(),
    parts: Joi.array().optional(),
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
