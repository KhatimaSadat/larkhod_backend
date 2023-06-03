import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import { IJwtEmailPayload, IJwtPayload } from "../interfaces/iJWTPayload";
import User from "../Models/User";
import ApiError from "../utils/ApiError";
import tokenService from "./token.service";
import userService from "./user.service";

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getByEmail(email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "No User Found");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  return user;
};

const resetPassword = async (token, newPassword) => {
  try {
    const tokenPayload = (await tokenService.verifyToken(token)) as IJwtPayload;
    const user = await userService.getByEmail(tokenPayload.id);
    if (!user) {
      throw new Error();
    }
    const newHashPass = await bcrypt.hashSync(newPassword);

    const updateduser = await User.findByIdAndUpdate(user._id, {
      $set: { password: newHashPass },
    });
    return await updateduser.save();
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");
  }
};
const changePassword = async (user, currentPassword, newPassword) => {
  const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
  }
  const newHashPass = bcrypt.hashSync(newPassword);
  const updateduser = await User.findByIdAndUpdate(user._id, {
    $set: { password: newHashPass },
  });
  return await updateduser.save();
};

const verifyEmail = async (verifyEmailToken) => {
  try {
    const verifyEmailTokenDoc = (await tokenService.verifyToken(
      verifyEmailToken
    )) as IJwtEmailPayload;

    const user = await userService.getByEmail(verifyEmailTokenDoc.email);
    if (!user) {
      throw new Error();
    }
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Email verification failed");
  }
};

export default {
  loginUserWithEmailAndPassword,
  resetPassword,
  verifyEmail,
  changePassword,
};
