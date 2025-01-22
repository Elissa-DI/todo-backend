// import { userService } from "../../services";
// import { errorHandlerWrapper } from "../../utils";
// import { generateToken } from "../../utils/generate";
// import { comparePassword } from "../../utils/password";
// import httpStatus from "http-status";

// const loginHandler = async (req, res) => {
//   const { email, password } = req.body;
//   const findUser = await userService.getOneUser({ email });
//   if (!findUser) return null;
//   if (findUser.deletedAt) return null;
//   const compare = await comparePassword(password, findUser.password);
//   if (!compare) return null;
//   const token = generateToken(findUser.uuid);
//   res.json({ token }).status(httpStatus.ACCEPTED);
// };

// export const loginController = errorHandlerWrapper(loginHandler);

import { userService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { generateToken } from "../../utils/generate";
import { comparePassword } from "../../utils/password";
import httpStatus from "http-status";

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Email and password are required.",
      });
    }

    // Check if the user exists
    const findUser = await userService.getOneUser({ email });
    if (!findUser) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: "User not found.",
      });
    }

    // Check if the user is deleted
    if (findUser.deletedAt) {
      return res.status(httpStatus.GONE).json({
        message: "This account has been deactivated.",
      });
    }

    // Compare passwords
    const isPasswordValid = await comparePassword(password, findUser.password);
    if (!isPasswordValid) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "Invalid credentials.",
      });
    }

    // Generate and return the token
    const token = generateToken(findUser.uuid);
    return res.status(httpStatus.OK).json({
      message: "Login successful.",
      token,
    });
  } catch (error) {
    // Handle unexpected errors
    console.error("Error in loginHandler:", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred. Please try again later.",
    });
  }
};

export const loginController = errorHandlerWrapper(loginHandler);
