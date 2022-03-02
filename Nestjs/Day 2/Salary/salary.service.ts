import { Injectable } from '@nestjs/common';
import { SharedService } from 'src/Services/shared.service';
import { SalaryDTO } from './salary.dto';
@Injectable()
export class SalaryService {
    constructor(private readonly sharedService: SharedService) {}
    
    salary1:SalaryDTO = {
        employeeID: 101,
        monthlySalary: 60000,
        workingDays: 24
    }

    CalculateSalary(): string {
        this.sharedService.DisplayAction("Salary", "Calculate Salary");
        return "Salary: " + this.salary1.monthlySalary;
    }
}