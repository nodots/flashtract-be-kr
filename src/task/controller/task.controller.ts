import { Controller, Post, Body, Get, Param, Delete, Put, Query, UseInterceptors, Request, Res } from '@nestjs/common';
import { TaskService } from '../service/task.service';
import { Task, TaskStatus } from '../models/task.interface';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
// import path = require('path');
// import { join } from 'path';

@Controller('tasks')
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Post()
    create(@Body() task: Task): Observable<Task> {
        return this.taskService.create(task);
    }


    @Get(':id')
    findOne(@Param() params: any): Observable<Task> {
      console.log(params);
      return this.taskService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Task[]> {
      return this.taskService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<Task> {
      return this.taskService.deleteOne(Number(id));    
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() task: Task): Observable<any> {
      return this.taskService.updateOne(Number(id), task);
    }




}