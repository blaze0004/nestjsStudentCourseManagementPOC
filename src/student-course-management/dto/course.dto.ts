import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsInt
} from "class-validator";
export class CreateCourseDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  name: string;
}
export class CourseIdDTO {
  @IsNotEmpty()
  @IsInt()
  @MinLength(0)
  id: number;
}
export class UpdateCourseDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  name: string;
}
