"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamController = void 0;
const common_1 = require("@nestjs/common");
const exam_service_1 = require("./exam.service");
let ExamController = class ExamController {
    constructor(examService) {
        this.examService = examService;
    }
    async createExam(exam) {
        return this.examService.createExam(exam);
    }
    async getExams() {
        return this.examService.getExams();
    }
    async getQuestions() {
        return this.examService.getQuestions();
    }
    async createQuestion(question) {
        return this.examService.createQuestion(question);
    }
    async getQuestionsByExam(examId) {
        return this.examService.getQuestionsByExam(examId);
    }
    async getQuestionByExam(examId, questionNo) {
        return this.examService.getQuestionByExam(examId, questionNo);
    }
    async addResult(userResult) {
        return this.examService.addResult(userResult);
    }
    async getUserResults(userId) {
        return this.examService.getUserResults(userId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "createExam", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getExams", null);
__decorate([
    (0, common_1.Get)('/questions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getQuestions", null);
__decorate([
    (0, common_1.Post)('/questions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "createQuestion", null);
__decorate([
    (0, common_1.Get)('/questions/:examId'),
    __param(0, (0, common_1.Param)('examId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getQuestionsByExam", null);
__decorate([
    (0, common_1.Get)('/questions/:examId/:questionNo'),
    __param(0, (0, common_1.Param)('examId')),
    __param(1, (0, common_1.Param)('questionNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getQuestionByExam", null);
__decorate([
    (0, common_1.Post)('/result'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "addResult", null);
__decorate([
    (0, common_1.Get)('/result/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getUserResults", null);
ExamController = __decorate([
    (0, common_1.Controller)("/exam"),
    __metadata("design:paramtypes", [exam_service_1.ExamService])
], ExamController);
exports.ExamController = ExamController;
//# sourceMappingURL=exam.controller.js.map