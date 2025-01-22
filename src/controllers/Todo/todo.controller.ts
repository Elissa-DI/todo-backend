import { todoService } from "../../services/todo.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";
import { UserEntity } from "../../entities/user.entity";
import { validationResult } from "express-validator";

const createTodoHandler = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const userId = req.user.uuid;

  const todo = await todoService.createTodo({
    title,
    description,
    dueDate,
    user: userId,
  });
  res.status(httpStatus.CREATED).json({
    msg: "Todo created sucessfully",
    todo
  });
};


const getTodosHandler = async (req, res) => {
  const userId = req.user.uuid;
  const todos = await todoService.getTodosByUser(userId);
  res.status(httpStatus.OK).json({
    msg: "Todos fetched sucessfully",
    todos
  });
};

const getTodoHandler = async (req, res) => {
  const { id } = req.params;
  const todo = await todoService.getTodoById(id);

  if (!todo) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "Todo not found" });
  }

  res.status(httpStatus.OK).json({
    msg: "Todo fetched sucessfully",
    todo
  });
};

const updateTodoHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedTodo = await todoService.updateTodo(id, data);
  res.status(httpStatus.OK).json({
    msg: "Todo updated sucessfully",
    updatedTodo
  });
};

const deleteTodoHandler = async (req, res) => {
  const { id } = req.params;
  await todoService.deleteTodo(id);
  res.status(httpStatus.NO_CONTENT).json({
    msg: "Todo deleted sucessfully",
  });
};

export const todoController = {
  createTodo: errorHandlerWrapper(createTodoHandler),
  getTodos: errorHandlerWrapper(getTodosHandler),
  getTodo: errorHandlerWrapper(getTodoHandler),
  updateTodo: errorHandlerWrapper(updateTodoHandler),
  deleteTodo: errorHandlerWrapper(deleteTodoHandler),
};
