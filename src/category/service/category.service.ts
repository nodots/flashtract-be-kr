import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../models/category.entity';
import { Repository } from 'typeorm';
import { Category } from '../models/category.interface';
import { Observable, from } from 'rxjs';
// import { switchMap } from 'rxjs/operators';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>,
    ) {}

    create(category: Category): Observable<Category> {
        // TODO: Add error handling
        // TODO: Add check for valid task status using TaskStatus enum
        return from(this.categoryRepository.save(category));
    }

    findOne(id: number): Observable<Category> {
        return from(this.categoryRepository.findOne({id}));
    }

    findAll(): Observable<Category[]> {
      return from(this.categoryRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.categoryRepository.delete(id));
    }

    updateOne(id: number, category: Category): Observable<any> {
        return from(this.categoryRepository.update(id, category));
    }

    findByTitle(title: string): Observable<Category> {
        return from(this.categoryRepository.findOne({title}));
    }
}