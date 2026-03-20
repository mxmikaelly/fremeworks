import { Injectable } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository/find-all-todos.repository";

@Injectable()
export class FindAllTodosUseCase {
  constructor(private readonly todoRepository: FindAllTodosRepository) {}

  async execute() {
    return await this.todoRepository.findAll();
  }
}