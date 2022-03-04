import { TaskService } from '../service/task.service';
import { Task } from '../models/task.interface';
import { Observable } from 'rxjs';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    create(task: Task): Observable<Task>;
    findOne(params: any): Observable<Task>;
    findAll(): Observable<Task[]>;
    deleteOne(id: string): Observable<Task>;
    updateOne(id: string, task: Task): Observable<any>;
}
