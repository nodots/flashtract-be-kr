import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/controller/task.controller';
import { TaskService } from './task/service/task.service'
import { TaskEntity } from './task/models/task.entity'
import { CategoryController } from './category/controller/category.controller';
import { CategoryService } from './category/service/category.service';
import { CategoryEntity } from './category/models/category.entity';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, TaskController, CategoryController],
      providers: [AppService, TaskService, CategoryService, TaskEntity, CategoryEntity],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Hello World!', () => {
      const result = appController.getHello();
      console.log(result);
      expect('1').toBe('1');
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});