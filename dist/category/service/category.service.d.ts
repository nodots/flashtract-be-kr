import { CategoryEntity } from '../models/category.entity';
import { Repository } from 'typeorm';
import { Category } from '../models/category.interface';
import { Observable } from 'rxjs';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    create(category: Category): Observable<Category>;
    findOne(id: number): Observable<Category>;
    findAll(): Observable<Category[]>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, category: Category): Observable<any>;
    findByTitle(title: string): Observable<Category>;
}
