import { AppDataSouce } from "../db/db.setup";
import { TodoEntity } from "../entities/todo.entity";

export const todoService = {
    async createTodo(data: Partial<TodoEntity>) {
        const todoRepository = AppDataSouce.getRepository(TodoEntity);
        const todo = todoRepository.create(data);
        return todoRepository.save(todo);
    },

    async getTodosByUser(userId: string) {
        const todoRepository = AppDataSouce.getRepository(TodoEntity);
        const todo=await todoRepository.find({
            where: { user: { uuid: userId } },
            relations: ["user"],
        });
        console.log(todo);
        
        
        return todo
    },

    async getTodoById(todoId: string) {
        const todoRepository = AppDataSouce.getRepository(TodoEntity);
        return todoRepository.findOne({
            where: { id: todoId },
            relations: ["user"],
        });
    },

    async updateTodo(id: string, data: Partial<TodoEntity>) {
        const todoRepository = AppDataSouce.getRepository(TodoEntity);
        await todoRepository.update(id, data);
        return todoRepository.findOneBy({ id });
    },

    async deleteTodo(id: string) {
        const todoRepository = AppDataSouce.getRepository(TodoEntity);
        return todoRepository.delete(id);
    },
};
