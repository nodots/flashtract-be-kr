import { Module } from '@nestjs/common';
import { TaskService } from './service/task.service';
import { TaskController } from './controller/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './models/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity])
  ],
  providers: [TaskService],
  controllers: [TaskController],
  exports: [TaskService]
})

export class TaskModule {}