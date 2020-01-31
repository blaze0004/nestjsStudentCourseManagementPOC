import { Course } from './course.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Teacher } from './teacher.entity';

@Entity()
export class Subject {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Teacher, teacher => teacher.subjects)
    teacher: Teacher;

    @ManyToOne(type => Course, course => course.subjects)
    course: Course;
   
}