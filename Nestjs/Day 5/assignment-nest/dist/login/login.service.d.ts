/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Model } from 'mongoose';
import { LoginSchema } from './login.schema';
export declare class LoginService {
    private readonly loginModel;
    constructor(loginModel: Model<typeof LoginSchema>);
    Login(username: string, password: string): Promise<false | (import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    createUser(user: any): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
