import { Module } from '@nestjs/common';
import { SharedService } from 'src/Services/shared.service';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
    imports:[],
    controllers:[SalaryController],
    providers:[SalaryService, SharedService]
})

export class SalaryModule {}