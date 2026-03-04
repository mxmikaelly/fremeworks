
export class CreateTodoDto {
title:string;
description:string;
completed:boolean;
name:string;
email: string;
priority: TodoPriority;
dueAT:Date;
userId:string;
createdAT:Date;
updatedAT:Date;
completedAT:Date;
}


enum TodoPriority {
LOW = 'LOW',
MEDIUM = 'MEDIUM',
HIGH = 'HIGH',
}