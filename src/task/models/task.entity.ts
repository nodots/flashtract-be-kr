import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { TaskStatus } from './task.interface';
import { CategoryEntity } from '../../category/models/category.entity'

@Entity()
export class TaskEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    status: TaskStatus;

    @ManyToMany(type => CategoryEntity, category => category.tasks, {
        cascade: true,
        orphanedRowAction: 'nullify'
    })
    @JoinTable()
    categories: CategoryEntity[];

}