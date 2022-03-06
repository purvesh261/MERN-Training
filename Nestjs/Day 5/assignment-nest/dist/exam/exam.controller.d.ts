/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose" />
import { ExamService } from './exam.service';
export declare class ExamController {
    private readonly examService;
    constructor(examService: ExamService);
    createExam(exam: any): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, import("mongoose").Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, import("mongoose").Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getExams(): Promise<(import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, import("mongoose").Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./exam.schema").Exam, any, any>, import("mongoose").Model<import("mongoose").Document<import("./exam.schema").Exam, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getQuestions(): Promise<(import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, import("mongoose").Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, import("mongoose").Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createQuestion(question: any): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, import("mongoose").Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, import("mongoose").Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getQuestionsByExam(examId: string): Promise<number>;
    getQuestionByExam(examId: string, questionNo: number): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, import("mongoose").Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./question.schema").Question, any, any>, import("mongoose").Model<import("mongoose").Document<import("./question.schema").Question, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addResult(userResult: any): Promise<any>;
    getUserResults(userId: string): Promise<any[]>;
}
