import { TaskStatus } from './task.interface';
import { CategoryEntity } from '../../category/models/category.entity';
export declare class TaskEntity {
    id: number;
    title: string;
    status: TaskStatus;
    categories: CategoryEntity[];
}
