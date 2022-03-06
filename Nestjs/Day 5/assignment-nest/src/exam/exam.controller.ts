import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller("/exam")
export class ExamController {
    constructor( private readonly examService: ExamService) {}

    @Post()
    async createExam(@Body() exam: any) {
        return this.examService.createExam(exam)
    }

    @Get()
    async getExams() {
        return this.examService.getExams();
    }

    @Get('/questions')
    async getQuestions() {
        return this.examService.getQuestions();
    }

    @Post('/questions')
    async createQuestion(@Body() question: any) {
        return this.examService.createQuestion(question);
    }

    @Get('/questions/:examId')
    async getQuestionsByExam(@Param('examId') examId: string) {
        return this.examService.getQuestionsByExam(examId)
    }

    @Get('/questions/:examId/:questionNo')
    async getQuestionByExam(@Param('examId') examId: string, @Param('questionNo') questionNo: number) {
        return this.examService.getQuestionByExam(examId, questionNo)
    }

    @Post('/result')
    async addResult(@Body() userResult: any) {
        return this.examService.addResult(userResult);
    }

    @Get('/result/:userId')
    async getUserResults(@Param('userId') userId: string) {
        return this.examService.getUserResults(userId);
    }
}