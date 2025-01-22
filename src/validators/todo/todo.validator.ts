import { body } from "express-validator";

export const createTodoValidator = () => {
  return [
    body("title").notEmpty().withMessage("Title is required."),
    body("description").notEmpty().withMessage("Description is required."),
    body("dueDate")
      .optional()
      .isISO8601()
      .withMessage("Due date must be a valid date in ISO8601 format."),
  ];
};

export const updateTodoValidator = () => {
  return [
    body("title").optional().notEmpty().withMessage("Title cannot be empty."),
    body("description")
      .optional()
      .notEmpty()
      .withMessage("Description cannot be empty."),
    body("dueDate")
      .optional()
      .isISO8601()
      .withMessage("Due date must be a valid date in ISO8601 format."),
  ];
};
