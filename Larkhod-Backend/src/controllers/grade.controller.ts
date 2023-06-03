import httpStatus from "http-status";
import { gradeService } from "../services";
import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";

const create = catchAsync(async (req, res) => {
  const result = await gradeService.create(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const query = catchAsync(async (req, res) => {
  const result = await gradeService.query();
  res.send(result);
});

const getById = catchAsync(async (req, res) => {
  const result = await gradeService.getById(req.params.id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  res.send(result);
});

const updateById = catchAsync(async (req, res) => {
  const result = await gradeService.updateById(req.params.id, req.body);
  res.send(result);
});

const deleteById = catchAsync(async (req, res) => {
  await gradeService.deleteById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
