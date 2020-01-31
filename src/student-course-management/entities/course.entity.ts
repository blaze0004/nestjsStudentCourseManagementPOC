import { Student } from "./student.entity";
import { Subject } from "./subject.entity";

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Student,
    student => student.course
  )
  students: Student[];

  @OneToMany(
    type => Subject,
    subject => subject.course
  )
  subjects: Subject[];
}
