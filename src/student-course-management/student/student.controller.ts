import { CourseIdDTO } from "./../dto/course.dto";
import {
  CreateStudentDTO,
  UpdateStudentDTO
} from "./../dto/student.dto";
import {
  Controller,
  Body,
  Post,
  Param,
  Get,
  Patch,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "../entities/student.entity";
import { AuthGuard } from "@nestjs/passport";

@Controller("student")
@UseGuards(AuthGuard())
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createStudent(@Body() createStudentDto: CreateStudentDTO) {
    return await this.studentService.createStudent(createStudentDto);
  }

  @Get("/:id")
  @UsePipes(ValidationPipe)
  async getStudent(@Param("id", ParseIntPipe) id: number) {
    return await this.studentService.getStudent(id);
  }

  @Get()
  async getAllStudent() {
    return await this.studentService.getAllStudents();
  }

  @Patch("/:id")
  @UsePipes(ValidationPipe)
  async updateStudent(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDTO
  ) {
    return await this.studentService.updateStudent(
      id,
      updateStudentDto
    );
  }

  @Delete("/:id")
  @UsePipes(ValidationPipe)
  async deleteStudent(@Param("id", ParseIntPipe) id: number) {
    return await this.studentService.deleteStudent(id);
  }
}
