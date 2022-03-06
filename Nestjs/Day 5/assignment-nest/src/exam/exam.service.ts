import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExamSchema } from './exam.schema';
import { QuestionSchema } from './question.schema';
import { ResultSchema } from './results.schema';

@Injectable()
export class ExamService{
    constructor(@InjectModel('exam') private readonly examModel: Model<typeof ExamSchema>, @InjectModel('question') private readonly questionModel: Model<typeof QuestionSchema>, @InjectModel('result') private readonly resultModel: Model<typeof ResultSchema>) {}

    async createExam(exam) {
        return this.examModel.create({examName: exam.examName})
    }

    async getExams() {
        return this.examModel.find({},{})
    }

    async getQuestions() {
        return this.questionModel.find({},{})
    }

    async getQuestionsByExam(examId) {
        const result = await this.questionModel.find({examId: examId}).count();
        return result;
    }

    async getQuestionByExam(examId: string, questionNo: number) {
        const result = await this.questionModel.findOne({examId: examId}).skip(questionNo - 1)
        return result;
    }

    async createQuestion(question) {
        return this.questionModel.create(question);
    }

    async addResult(userResult) {
        const result = await this.resultModel.create(userResult);
        return null;
    }

    async getUserResults(userId) {
        const result = await this.resultModel.aggregate([{ $match: { userId: userId }}, {$group:{_id:"$examId", maxScore: {$max: "$score"}, attempts:{$sum: 1}}}]);
        console.log(result);
        return result;
    }

}