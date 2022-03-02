import { Controller, Get } from '@nestjs/common';
import { SalaryService } from './salary.service';

@Controller('/salary')
export class SalaryController {
    constructor(private readonly salaryService: SalaryService) {}

    @Get()
    CalculateSalary(): string {
        return this.salaryService.CalculateSalary();
    }
}