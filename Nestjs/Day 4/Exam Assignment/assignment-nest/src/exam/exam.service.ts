import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExamSchema } from './exam.schema';
import { QuestionSchema } from './question.schema';

@Injectable()
export class ExamService{
    constructor(@InjectModel('exam') private readonly examModel: Model<typeof ExamSchema>, @InjectModel('question') private readonly questionModel: Model<typeof QuestionSchema>) {}

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
        const result = await this.questionModel.find({examId: examId});
        if(result.length > 0)
        {
            return result;
        }
        else
        {
            return "No questions found"
        }
    }

    async createQuestion(question) {
        return this.questionModel.create(question);
    }

}