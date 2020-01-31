import { Subject } from './subject.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Subject, subject => subject.teacher)
    subjects: Subject[];
    
}