import Joi from "joi";

const fileMeta = {
  body: Joi.object().keys({
    path: Joi.string().required(),
    contentType: Joi.string().required(),
    fileFormat: Joi.string().required(),
  }),
};

export default {
  fileMeta,
};
