/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose" />
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    authenticate(user: any): Promise<false | (import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, import("mongoose").Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, import("mongoose").Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    createUser(user: any): Promise<import("mongoose").Document<unknown, any, import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, import("mongoose").Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any>> & import("mongoose").Schema<import("mongoose").Document<import("./login.schema").Login, any, any>, import("mongoose").Model<import("mongoose").Document<import("./login.schema").Login, any, any>, any, any, any>, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
