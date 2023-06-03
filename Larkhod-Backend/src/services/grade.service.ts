import httpStatus from "http-status";
import Grade from "../Models/Grade";
import ApiError from "../utils/ApiError";

const create = async (reqBody) => {
  return await Grade.create(reqBody);
};

const query = async () => {
  return await Grade.find();
};

const getById = async (id) => {
  return await Grade.findById(id);
};


const updateById = async (id, updateBody) => {
  const result = await Grade.findByIdAndUpdate(id, updateBody,{new:true});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  return result;
};

const deleteById = async (id) => {
  const result = await getById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await Grade.findByIdAndRemove(id);
  return result;
};

export default {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
