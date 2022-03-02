import { Controller, Get } from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Controller('/employee')
export class EmployeeController {
    constructor(private readonly employeeService : EmployeeService) {}

    @Get('/add')
    AddEmployee(): any {
        return this.employeeService.AddEmployee();
    }

    @Get('/update')
    UpdateEmployee(): any {
        return this.employeeService.UpdateEmployee();
    }

    @Get('/delete')
    DeleteEmployee(): any {
        return this.employeeService.DeleteEmployee();
    }

    @Get('/list')
    ListEmployee(): any {
        return this.employeeService.ListEmployees();
    }
}