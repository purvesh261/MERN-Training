import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { SharedService } from 'src/Services/shared.service';

@Module({
    imports: [],
    controllers: [EmployeeController],
    providers: [EmployeeService, SharedService]
})

export class EmployeeModule {}