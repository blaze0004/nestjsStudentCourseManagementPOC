import { CreateTeacherDTO, UpdateTeacherDTO } from "./../dto/teacher.dto";
import { Teacher } from "../entities/teacher.entity";
import {
  Injectable,
  BadRequestException,
  NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>
  ) {}

  async createTeacher(createTeacherDto: CreateTeacherDTO) {
    const result = this.teacherRepository.create(createTeacherDto);
    const teacher = await this.teacherRepository.save(result);
    if (teacher) {
      return teacher;
    } else {
      throw new BadRequestException("Unable to create teacher.");
    }
  }

  async getTeacher(id : number) {
    const result = await this.teacherRepository.findOneOrFail(
      {
        id
      },
      { relations: ["subjects"] }
    );
    const teacher = await this.teacherRepository.save(result);

    if (teacher) return teacher;
    throw new NotFoundException("Teacher not found.");
  }

  async getAllTeacher() {
    const teachers = await this.teacherRepository.find({});
    if (teachers) return teachers;
    throw new NotFoundException("Teachers not found.");
  }

  async updateTeacher(id : number, updateTeacherDto: UpdateTeacherDTO) {
    const result = await this.teacherRepository.update(
      { id },
      updateTeacherDto
    );
    if (result.affected === 0)
      throw new NotFoundException(
        "Unable to update teacher details. Teacher not found."
      );
    return await this.teacherRepository.findOneOrFail(id);
  }

  async deleteTeacher(id : number) {
    const result = await this.teacherRepository.delete({ id });
    if (result.affected === 0)
      throw new NotFoundException("Unable to delete teacher. Student not");
  }
}
