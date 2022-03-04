import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../models/task.entity';
import { Repository } from 'typeorm';
import { Task } from '../models/task.interface';
import { Observable, from } from 'rxjs';
// import { switchMap } from 'rxjs/operators';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
    ) {}

    create(task: Task): Observable<Task> {
        // TODO: Add error handling
        // TODO: Add check for valid task status using TaskStatus enum
        return from(this.taskRepository.save(task));
    }

    findOne(id: number): Observable<Task> {
        return from(this.taskRepository.findOne({id}));
    }

    findAll(): Observable<Task[]> {
      return from(this.taskRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.taskRepository.delete(id));
    }

    updateOne(id: number, task: Task): Observable<any> {
        return from(this.taskRepository.update(id, task));
    }

    findByTitle(title: string): Observable<Task> {
        return from(this.taskRepository.findOne({title}));
    }
}