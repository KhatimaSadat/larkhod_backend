import httpStatus from "http-status";
import Book from "../Models/Book";
import ApiError from "../utils/ApiError";

const create = async (reqBody) => {
  return await Book.create(reqBody);
};

const query = async () => {
  return await Book.find();
};

const getById = async (id) => {
  return await Book.findById(id);
};


const updateById = async (id, updateBody) => {
  const result = await Book.findByIdAndUpdate(id, updateBody,{new:true});
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
  await Book.findByIdAndRemove(id);
  return result;
};

export default {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
