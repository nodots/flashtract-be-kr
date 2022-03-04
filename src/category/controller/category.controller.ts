import { Controller, Post, Body, Get, Param, Delete, Put, Query, UseInterceptors, Request, Res } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category.interface';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
// import path = require('path');
// import { join } from 'path';

@Controller('categories')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Post()
    create(@Body() category: Category): Observable<Category> {
        return this.categoryService.create(category);
    }


    @Get(':id')
    findOne(@Param() params: any): Observable<Category> {
      console.log(params);
      return this.categoryService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Category[]> {
      return this.categoryService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<Category> {
      return this.categoryService.deleteOne(Number(id));    
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() category: Category): Observable<any> {
      return this.categoryService.updateOne(Number(id), category);
    }

}