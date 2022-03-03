import { Injectable } from "@nestjs/common";
import { SharedService } from "src/Services/shared.service";
import { EmployeeDTO } from "./employee.dto";

@Injectable()
export class EmployeeService {
    constructor(private readonly sharedService: SharedService) {}
    
    employee:EmployeeDTO = {
        employeeName: "Employee One",
        designation: "Web Developer",
        salary: 60000
    }

    employee2:EmployeeDTO = {
        employeeName: "Employee Two",
        designation: "HR",
        salary: 75000
    }

    employee3:EmployeeDTO = {
        employeeName: "Employee Three",
        designation: "Project Manager",
        salary: 90000
    }

    module = "Employee"

    AddEmployee(): string {
        this.sharedService.DisplayAction(this.module, "add employee")
        return "Employee added: " + this.employee.employeeName;
    }

    UpdateEmployee(): string {
        this.sharedService.DisplayAction(this.module, "update employee")
        return "Employee Updated: " + this.employee2.employeeName;
    }

    DeleteEmployee() : string {
        this.sharedService.DisplayAction(this.module, "delete employee")
        return "Employee Deleted: " + this.employee3.employeeName;
    }

    ListEmployees(): any {
        this.sharedService.DisplayAction(this.module, "list employees");
        return [this.employee, this.employee2, this.employee3];
    }
}