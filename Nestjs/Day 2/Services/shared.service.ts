import { Injectable } from "@nestjs/common";

export class SharedService {
    DisplayAction(module, action): any {
        console.log(`Module: ${module}\nAction: ${action}\n`);
    }
}