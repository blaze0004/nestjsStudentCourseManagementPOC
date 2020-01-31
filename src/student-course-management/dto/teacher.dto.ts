import { IsNotEmpty, MaxLength, MinLength , IsInt , IsOptional} from "class-validator";

export class CreateTeacherDTO {
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  name: string;
}

export class TeacherIdDTO {
  @IsNotEmpty()
  @IsInt()
  @MinLength(0)
  id: number;
}

export class UpdateTeacherDTO {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(3)
  name: string;
}