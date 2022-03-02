import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentService } from './student.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly studentService: StudentService) {}

  @Get("/addnewstudent")
  AddNewStudent(): string {
    return this.studentService.AddNewStudent();
  }

  @Get('/editstudent')
  EditStudent() : string {
    return this.studentService.EditStudent();
  }

  @Get('/deletestudent')
  DeleteStudent() : any {
    return this.studentService.DeleteStudent();
  }

  @Get('/liststudents')
  GetAllStudents() : any {
    return this.studentService.GetAllStudents();
  }
}
