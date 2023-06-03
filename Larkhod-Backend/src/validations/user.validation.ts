import Joi from "joi";
import { objectId, password } from "./custom.validation";

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    image: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().required().custom(password),
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
      name: Joi.string().optional(),
      email: Joi.string().optional().email(),
      image: Joi.string().optional(),
      phone: Joi.string().optional(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const updateMe = {
  body: Joi.object()
    .keys({
      name: Joi.string().optional(),
      image: Joi.string().optional(),
      phone: Joi.string().optional(),
    })
    .min(1),
};



export default {
  create,
  getById,
  updateById,
  deleteById,
  updateMe,
};
