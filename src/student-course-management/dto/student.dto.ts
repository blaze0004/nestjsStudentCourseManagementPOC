import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
  IsInt,
  IsPositive,
  Min
} from "class-validator";
export class CreateStudentDTO {
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  lastName: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(0)
  courseId: number;
}

export class StudentIdDTO {

  @IsNotEmpty()
  @IsInt()
  @MinLength(0)
  id: number;
}

export class UpdateStudentDTO {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  firstName: string;
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  lastName: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(0)
  courseId: number;

}