import { Router } from "express";
import { TodoController } from "../controllers";
import { TodoValidator } from "../validators";
import { checkAuth } from "../utils";

export const todoRouter = Router();


todoRouter.post(
    "/",
    checkAuth,
    TodoValidator.createTodoValidator(),
    TodoController.todoController.createTodo
);

todoRouter.get(
    "/",
    checkAuth,
    TodoController.todoController.getTodos
);

todoRouter.get(
    "/:id",
    checkAuth,
    TodoController.todoController.getTodo
);

todoRouter.put(
    "/:id",
    checkAuth,
    TodoValidator.updateTodoValidator(),
    TodoController.todoController.updateTodo
);

todoRouter.delete(
    "/:id",
    checkAuth,
    TodoController.todoController.deleteTodo
);

