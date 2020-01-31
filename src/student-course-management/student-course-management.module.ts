import { JwtStrategy } from './auth/jwt.strategy';
import { User } from './entities/user.entity';
import { Teacher } from "./entities/teacher.entity";
import { Subject } from "./entities/subject.entity";
import { Course } from "./entities/course.entity";
import { Student } from "./entities/student.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { SubjectService } from "./subject/subject.service";
import { TeacherService } from "./teacher/teacher.service";
import { StudentService } from "./student/student.service";
import { CourseService } from "./course/course.service";
import { StudentController } from "./student/student.controller";
import { CourseController } from "./course/course.controller";
import { TeacherController } from "./teacher/teacher.controller";
import { SubjectController } from "./subject/subject.controller";
import { AuthService } from "./auth/auth.service";
import { AuthController } from "./auth/auth.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, Course, Subject, Teacher, User]),
    PassportModule.register({defaultStrategy : 'jwt'}),
    JwtModule.register({
      secret: 'veryHardSecret',
      signOptions: {
        expiresIn: '2h'
      }
    })
  ],
  providers: [
    StudentService,
    CourseService,
    SubjectService,
    TeacherService,
    AuthService,
    JwtStrategy
  ],
  controllers: [
    StudentController,
    CourseController,
    TeacherController,
    SubjectController,
    AuthController
  ]
})
export class StudentCourseManagement {}
