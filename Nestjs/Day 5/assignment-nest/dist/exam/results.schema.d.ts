/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose" />
export declare class Result {
    userId: string;
    examId: string;
    score: number;
    answers: {};
}
export declare const ResultSchema: import("mongoose").Schema<import("mongoose").Document<Result, any, any>, import("mongoose").Model<import("mongoose").Document<Result, any, any>, any, any, any>, any, any>;
