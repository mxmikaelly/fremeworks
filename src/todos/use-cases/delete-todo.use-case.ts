import { Injectable, NotFoundException } from "@nestjs/common";
import { DeleteToddoRepository } from "../repository/delete-todo.repository";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: DeleteToddoRepository, private readonly findTodoById: FindTodoByIdRepository) {}

  async execute(id: string) {
    const todo = await this.findTodoById.execute(id);

    if (!todo) {
      throw new NotFoundException("Todo não encontrado");
    }

    await this.todoRepository.execute(id);

    return {
      message: "Todo deletado com sucesso",
    };
  }
}