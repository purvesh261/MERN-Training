import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginSchema } from './login.schema';

@Injectable()
export class LoginService{
    constructor(@InjectModel('login') private readonly loginModel: Model<typeof LoginSchema>) {}

    async Login(username:string, password:string) {
        const result = await this.loginModel.findOne({username:username, password:password});
        if(result)
        {
            return result;
        }
        else
        {
            return false;
        }
    }

    async createUser(user) {
        return this.loginModel.create(user);
    }
}