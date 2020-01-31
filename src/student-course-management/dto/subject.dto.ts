import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
  IsInt,
  IsPositive,
  Min
} from "class-validator";

export class CreateSubjectDTO {
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(0)
  teacherId: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(0)
  courseId: number;
}

export class SubjectIdDTO {
  @IsNotEmpty()
  @IsInt()
  @MinLength(0)
  id: number;
}

export class UpdateSubjectDTO {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(0)
  teacherId: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(0)
  courseId: number;
}
