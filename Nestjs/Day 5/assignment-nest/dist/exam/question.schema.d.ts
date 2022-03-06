/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose" />
export declare class Question {
    examId: string;
    question: string;
    options: [];
}
export declare const QuestionSchema: import("mongoose").Schema<import("mongoose").Document<Question, any, any>, import("mongoose").Model<import("mongoose").Document<Question, any, any>, any, any, any>, any, any>;
