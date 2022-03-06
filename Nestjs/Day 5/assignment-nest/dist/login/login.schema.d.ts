/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose" />
export declare class Login {
    username: string;
    password: string;
}
export declare const LoginSchema: import("mongoose").Schema<import("mongoose").Document<Login, any, any>, import("mongoose").Model<import("mongoose").Document<Login, any, any>, any, any, any>, any, any>;
