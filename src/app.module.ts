import { User } from './student-course-management/entities/user.entity';
import { StudentCourseManagement } from './student-course-management/student-course-management.module';
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student-course-management/entities/student.entity";
import { Subject } from "./student-course-management/entities/subject.entity";
import { Teacher } from "./student-course-management/entities/teacher.entity";
import { Course } from "./student-course-management/entities/course.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mssql",
      host: "localhost",
      port: 1433,
      username: "sa",
      password: "password",
      database: "student-course-management",
      entities: [Student, Subject, Teacher, Course, User],
      synchronize: true
    }),
    StudentCourseManagement,
    
    
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
