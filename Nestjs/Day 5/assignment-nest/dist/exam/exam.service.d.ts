/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Model } from 'mongoose';
import { ExamSchema } from './exam.schema';
import { QuestionSchema } from './question.schema';
import { ResultSchema } from './results.schema';
export declare class ExamService {
    private readonly examModel;
    private readonly questionModel;
    private readonly resultModel;
    constructor(examModel: Model<typeof ExamSchema>, questionModel: Model<typeof QuestionSchema>, resultModel: Model<typeof ResultSchema>);
    createExam(exam: any): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getExams(): Promise<(import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getQuestions(): Promise<(import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getQuestionsByExam(examId: any): Promise<number>;
    getQuestionByExam(examId: string, questionNo: number): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createQuestion(question: any): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addResult(userResult: any): Promise<any>;
    getUserResults(userId: any): Promise<any[]>;
}
