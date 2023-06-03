import httpStatus from "http-status";
import { userService } from "../services";
import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";

const create = catchAsync(async (req, res) => {
  const user = await userService.create(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const query = catchAsync(async (req, res) => {
  const result = await userService.query();
  res.send(result);
});

const getById = catchAsync(async (req, res) => {
  const user = await userService.getById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

const updateById = catchAsync(async (req, res) => {
  const user = await userService.updateById(req.params.id, req.body);
  res.send(user);
});

const deleteById = catchAsync(async (req, res) => {
  await userService.deleteById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

const updateMe = catchAsync(async (req, res) => {
  const user = await userService.updateById(req.user?._id, req.body);
  res.send(user);
});


export default {
  create,
  query,
  getById,
  updateById,
  deleteById,
  updateMe,
};
