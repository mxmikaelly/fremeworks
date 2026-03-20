import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { UpdateTodoRepository } from "../repository/update-todo.repository";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class UpdateTodoUseCase {
  constructor(private readonly todoRepository: UpdateTodoRepository, private readonly findTodoById: FindTodoByIdRepository) {}

  async execute(id: string, data: UpdateTodoDto) {
    const todo = await this.findTodoById.execute(id);

    if (!todo) {
      throw new NotFoundException("Todo não encontrado");
    }

    return await this.todoRepository.execute(id, data);
  }
}