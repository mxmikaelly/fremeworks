import { Injectable, NotFoundException } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class FindTodoByIdUseCase {
  constructor(private readonly todoRepository: FindTodoByIdRepository) {}

  async execute(id: string) {
    const todo = await this.todoRepository.execute(id);

    if (!todo) {
      throw new NotFoundException("Todo não encontrado");
    }

    return todo;
  }
}