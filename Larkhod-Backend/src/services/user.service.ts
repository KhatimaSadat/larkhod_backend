import httpStatus from "http-status";
import ApiError from "../utils/ApiError";
import bcryptjs from "bcryptjs";
import User from "../Models/User";

const create = async (reqBody) => {
  if (await getByEmail(reqBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  const hashPass = await bcryptjs.hashSync(reqBody.password);
  return await User.create({
    ...reqBody,
    password: hashPass,
  });
};

const query = async () => {
  return await User.find();
};

const getById = async (id) => {
  return await User.findById(id);
};

const getByEmail = async (email) => {
  return await User.findOne({ email: email });
};

const updateById = async (userId, updateBody) => {

  const user = await User.findByIdAndUpdate(userId, updateBody,{new:true});

  if (!user) {

    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};

const deleteById = async (userId) => {
  const user = await getById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await User.findByIdAndRemove(userId);
  return user;
};

export default {
  create,
  query,
  getById,
  getByEmail,
  updateById,
  deleteById,
};
