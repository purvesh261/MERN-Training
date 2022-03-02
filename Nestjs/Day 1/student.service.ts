import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService{
    AddNewStudent(): string {
        return "New student added";
    }

    EditStudent(): string {
        return "Student has been updated";
    }

    DeleteStudent(): string {
        return "Student has been deleted";
    }

    GetAllStudents(): any {
        return ["Purvesh", "Ronak", "Devang"];
    }
}