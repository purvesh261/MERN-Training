import { Injectable } from "@nestjs/common";

export class SharedService {
    DisplayAction(module:string, action:string): any {
        console.log(`Module: ${module}\nAction: ${action}\n`);
    }
}