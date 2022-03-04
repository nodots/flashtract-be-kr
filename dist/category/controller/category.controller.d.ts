import { CategoryService } from '../service/category.service';
import { Category } from '../models/category.interface';
import { Observable } from 'rxjs';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(category: Category): Observable<Category>;
    findOne(params: any): Observable<Category>;
    findAll(): Observable<Category[]>;
    deleteOne(id: string): Observable<Category>;
    updateOne(id: string, category: Category): Observable<any>;
}
