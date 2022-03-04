import { TaskEntity } from '../models/task.entity';
import { Repository } from 'typeorm';
import { Task } from '../models/task.interface';
import { Observable } from 'rxjs';
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    create(task: Task): Observable<Task>;
    findOne(id: number): Observable<Task>;
    findAll(): Observable<Task[]>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, task: Task): Observable<any>;
    findByTitle(title: string): Observable<Task>;
}
