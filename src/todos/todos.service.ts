import { Injectable } from "@nestjs/common";


import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { CreateTodoUseCase, DeleteTodoUseCase, FindAllTodosUseCase, FindTodoByIdUseCase, UpdateTodoUseCase } from "./use-cases";

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodosUseCase: FindAllTodosUseCase,
    private readonly findTodoByIdUseCase: FindTodoByIdUseCase,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase
  ) {}

  async create(data: CreateTodoDto) {
    return this.createTodoUseCase.execute(data);
  }

  async findAll() {
    return this.findAllTodosUseCase.execute();
  }

  async findOne(id: string) {
    return this.findTodoByIdUseCase.execute(id);
  }

  async update(id: string, data: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(id, data);
  }

  async remove(id: string) {
    return this.deleteTodoUseCase.execute(id);
  }
}