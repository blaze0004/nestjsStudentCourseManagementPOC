import { CreateStudentDTO, UpdateStudentDTO } from "./../dto/student.dto";
import { Student } from "../entities/student.entity";
import {
  Injectable,
  BadRequestException,
  NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import e = require("express");

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {}

  async createStudent(createStudentDto: CreateStudentDTO) {
    const result = await this.studentRepository.create(createStudentDto);
    const student = await this.studentRepository.save(result);

    if (student) {
      return student;
    } else {
      throw new BadRequestException("Unable to create student.");
    }
  }

  async getStudent(id : number) {
    const student = await this.studentRepository.findOneOrFail(
      { id },
      { relations: ["course"] }
    );
    if (student) {
      return student;
    }
    throw new NotFoundException("Student not found.");
  }

  async getAllStudents() {
    const students = await this.studentRepository.find({});
    if (students) {
      return students;
    }
    throw new NotFoundException("No Student found.");
  }

  async updateStudent(id : number, updateStudentDto: UpdateStudentDTO) {
    const result = await this.studentRepository.update(
      { id },
      updateStudentDto
    );
    if (result.affected === 0)
      throw new NotFoundException(
        "Unable to update student details. Student not found."
      );
    return await this.studentRepository.findOneOrFail(id);
  }

  async deleteStudent(id : number) {
    const result = await this.studentRepository.delete({ id });
    if (result.affected === 0)
      throw new NotFoundException(
        "Unable to delete student. Student not found."
      );
  }
}
