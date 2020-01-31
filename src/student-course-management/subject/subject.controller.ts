import { CreateSubjectDTO, UpdateSubjectDTO } from "./../dto/subject.dto";
import {
  Controller,
  Body,
  Post,
  Param,
  Get,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards
} from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("subject")
@UseGuards(AuthGuard())
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createSubject(@Body() createSubjectDto: CreateSubjectDTO) {
    return await this.subjectService.createSubject(createSubjectDto);
  }

  @Get("/:id")
  @UsePipes(ValidationPipe)
  async getSubject(@Param("id", ParseIntPipe) id: number) {
    return await this.subjectService.getSubject(id);
  }

  @Get()
  async getAllSubject() {
    return await this.subjectService.getAllSubjects();
  }

  @Patch("/:id")
  @UsePipes(ValidationPipe)
  async updateSubject(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateSubjectDto: UpdateSubjectDTO
  ) {
    return await this.subjectService.updateSubject(id, updateSubjectDto);
  }

  @Delete("/:id")
  @UsePipes(ValidationPipe)
  async deleteSubject(@Param("id", ParseIntPipe) id: number) {
    return await this.subjectService.deleteSubject(id);
  }
}
