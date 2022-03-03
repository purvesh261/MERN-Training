import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller("/login")
export class LoginController {
    constructor( private readonly loginService: LoginService) {}

    @Post()
    async authenticate(@Body() user: any) {
        return this.loginService.Login(user.username, user.password);
    }

    @Post('/create')
    async createUser(@Body() user: any) {
        return this.loginService.createUser(user);
    }
}