import { Category } from '../../category/models/category.interface';

export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    categories: Category[]
}

export enum TaskStatus {
    BACKLOG,
    TODO,    
    ONGOING,
    DONE,
}