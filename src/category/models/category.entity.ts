import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { TaskEntity } from '../../task/models/task.entity';

@Entity()
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(type => TaskEntity, task => task.categories)
    tasks: TaskEntity[];

}