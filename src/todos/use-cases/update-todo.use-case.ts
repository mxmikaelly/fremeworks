import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../repository";

@Injectable()
export class UpdateTodoUseCase {
  constructor(
    private readonly updateTodoRepository: UpdateTodoRepository,
    private readonly findTodoById: FindTodoByIdRepository,
    private readonly logger: Logger
  ) {}

  async execute(id: string, data: UpdateTodoDto

  ) {
    try {
      this.logger.log("updating todo...");

      const todo = await this.findTodoById.execute(id);

      if (!todo) {
        throw new NotFoundException("Todo não encontrado");
      }

      const updatedTodo = await this.updateTodoRepository.execute(id, data);

      this.logger.log("todo updated successfully");

      return updatedTodo;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}