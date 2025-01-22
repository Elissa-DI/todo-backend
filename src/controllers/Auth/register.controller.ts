import { userService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { encryptPassword } from "../../utils/encrypt";
import httpStatus from "http-status";

const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Username, email, and password are required.",
      });
    }

    // Check if the email is already registered
    const existingUser = await userService.getOneUser({ email });
    if (existingUser) {
      return res.status(httpStatus.CONFLICT).json({
        message: "Email is already registered.",
      });
    }

    // Encrypt password and create the user
    const hashPassword = await encryptPassword(password);
    const user = await userService.createUser({
      username,
      email,
      password: hashPassword,
    });

    // Respond with created user (excluding sensitive information)
    const { password: _, ...userWithoutPassword } = user;
    return res.status(httpStatus.CREATED).json({
      message: "User registered successfully.",
      user: userWithoutPassword,
    });
  } catch (error) {
    // Handle unexpected errors
    console.error("Error in registerHandler:", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred. Please try again later.",
    });
  }
};

export const registerController = errorHandlerWrapper(registerHandler);
