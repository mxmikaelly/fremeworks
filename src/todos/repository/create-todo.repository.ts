import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async execute(data: CreateTodoDto) {
        return await this.prisma.todo.create ({data}); 
    }
}
