import { TaskEntity } from '../../task/models/task.entity';
export declare class CategoryEntity {
    id: number;
    title: string;
    tasks: TaskEntity[];
}
