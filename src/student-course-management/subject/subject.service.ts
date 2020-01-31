import { CreateSubjectDTO, UpdateSubjectDTO } from "./../dto/subject.dto";
import { Subject } from "../entities/subject.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>
  ) {}

  async createSubject(createSubjectDTO: CreateSubjectDTO) {
    const result = await this.subjectRepository.create(createSubjectDTO);
    return await this.subjectRepository.save(result);
  }

  async getSubject(id: number) {
    const subject = await this.subjectRepository.findOneOrFail(
      { id },
      { relations: ["teacher"] }
    );
    if (subject) return subject;
    throw new NotFoundException("Subject not found.");
  }

  async getAllSubjects() {
    const subjects = await this.subjectRepository.find();
    if (subjects) return subjects;
    throw new NotFoundException("No subjects found.");
  }

  async updateSubject(id: number, updateSubjectDto: UpdateSubjectDTO) {
    const result = await this.subjectRepository.update(
      { id },
      updateSubjectDto
    );

    if (result.affected === 0)
      throw new NotFoundException(
        "Unable to update subject details. Subject not found."
      );
    return await this.subjectRepository.findOneOrFail(id);
  }

  async deleteSubject(id: number) {
    const result = await this.subjectRepository.delete({ id });
    if (result.affected === 0)
      throw new NotFoundException(
        "Unable to delete subject. Subject not found."
      );
  }
}
