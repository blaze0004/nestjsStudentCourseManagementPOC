import { CreateTeacherDTO,  UpdateTeacherDTO } from './../dto/teacher.dto';
import { Teacher } from "../entities/teacher.entity";
import { TeacherService } from "./teacher.service";
import { Controller, Post, Body, Get, Param, Patch, Delete, UsePipes, ValidationPipe, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

@Controller("teacher")

@UseGuards(AuthGuard())
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createTeacher(@Body() createTeacherDto: CreateTeacherDTO) {
    return this.teacherService.createTeacher(createTeacherDto);
  }

  @Get("/:id")
  @UsePipes(ValidationPipe)
  getTeacher(@Param("id") id: number) {
    return this.teacherService.getTeacher(id);
  }

  @Get()
  getAllTeacher() {
    return this.teacherService.getAllTeacher();
  }

  @Patch("/:id")
  @UsePipes(ValidationPipe)
  async updateTeacher(
    @Param("id") id: number,
    @Body() updateTeacherDto: UpdateTeacherDTO
  ) {

    return await this.teacherService.updateTeacher(id, updateTeacherDto);
  }

  @Delete("/:id")
  @UsePipes(ValidationPipe)
  async deleteTeacher(@Param('id') id: number) {
      return await this.teacherService.deleteTeacher(id);
  }
}
