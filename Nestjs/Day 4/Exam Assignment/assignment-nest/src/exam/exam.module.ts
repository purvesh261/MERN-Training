import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamSchema } from './exam.schema';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { QuestionSchema } from './question.schema';


@Module({
    imports: [MongooseModule.forFeature([{name:'exam', schema: ExamSchema}]), MongooseModule.forFeature([{name:'question', schema: QuestionSchema}])],
    controllers: [ExamController],
    providers: [ExamService]
})

export class ExamModule {};