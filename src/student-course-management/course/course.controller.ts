import { UpdateCourseDTO } from "./../dto/course.dto";
import { CourseService } from "./course.service";
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards
} from "@nestjs/common";
import { CreateCourseDTO } from "../dto/course.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("course")
@UseGuards(AuthGuard())
export class CourseController {
  constructor(private readonly courseService: CourseService) {
    console.log("in course controller");
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCourse(@Body() createCourseDto: CreateCourseDTO) {
    return await this.courseService.createCourse(createCourseDto);
  }

  @Get("/:id")
  @UsePipes(ValidationPipe)
  async getCourse(@Param("id", ParseIntPipe) id: number) {
    return await this.courseService.getCourse(id);
  }

  @Get()
  @UseGuards(AuthGuard())
  async getAllCourse() {
    console.log("in controller");
    return await this.courseService.getAllCourses();
  }

  @Patch("/:id")
  @UsePipes(ValidationPipe)
  async updateCourse(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCourseDTO: UpdateCourseDTO
  ) {
    return await this.courseService.updateCourse(id, updateCourseDTO);
  }

  @Delete("/:id")
  @UsePipes(ValidationPipe)
  async deleteCourse(@Param("id", ParseIntPipe) id: number) {
    return await this.courseService.deleteCourse(id);
  }
}
