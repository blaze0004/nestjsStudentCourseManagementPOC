import { CourseIdDTO, UpdateCourseDTO } from './../dto/course.dto';
import { Course } from "../entities/course.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCourseDTO } from "../dto/course.dto";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) {}

  async createCourse(createCourseDto: CreateCourseDTO) {
    const result = this.courseRepository.create(createCourseDto);
    return await this.courseRepository.save(result)
  }

  async getCourse(id : number) {
      const course = await this.courseRepository.findOneOrFail({id}, { relations: ['subjects']});
      if (course) return course
      throw new NotFoundException('Course not found.');
  }

  async getAllCourses() {
    console.log('in service')
    return await this.courseRepository.find({});
  }

  async updateCourse(id : number, updateCourseDto: UpdateCourseDTO) {
      const result = await this.courseRepository.update({id}, updateCourseDto)
      
      if (result.affected === 0) {
        throw new NotFoundException('Unable to update course details. Course not found.')
      }
      return await this.courseRepository.findOneOrFail(id);
  }

  async deleteCourse(id : number) {
      const result =  await this.courseRepository.delete({id});
      if (result.affected === 0) {
        throw new NotFoundException('Unable to delete course. Course not found. ')
      }
  }
}
