import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteToddoRepository } from "../repository/delete-todo.repository";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: DeleteToddoRepository, private readonly findTodoById: FindTodoByIdRepository,private readonly logger:Logger) {}

  async execute(id: string) {
    try {
      this.logger.log('deleting toDo...');
    
    const todo = await this.findTodoById.execute(id);

    if (!todo) {
      throw new NotFoundException("Todo não encontrado");
    }

    await this.todoRepository.execute(id);
    this.logger.log('toDo deleted successfully');
    return todo
  }
   
    catch (error){
      this.logger.error(error);
      throw error;
    }
}
}