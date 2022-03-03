import { Controller, Get } from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Controller('/employee')
export class EmployeeController {
    constructor(private readonly employeeService : EmployeeService) {}

    @Get('/add')
    AddEmployee(): string {
        return this.employeeService.AddEmployee();
    }

    @Get('/update')
    UpdateEmployee(): string {
        return this.employeeService.UpdateEmployee();
    }

    @Get('/delete')
    DeleteEmployee(): string {
        return this.employeeService.DeleteEmployee();
    }

    @Get('/list')
    ListEmployee(): any {
        return this.employeeService.ListEmployees();
    }
}