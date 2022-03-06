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
exports.ExamService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ExamService = class ExamService {
    constructor(examModel, questionModel, resultModel) {
        this.examModel = examModel;
        this.questionModel = questionModel;
        this.resultModel = resultModel;
    }
    async createExam(exam) {
        return this.examModel.create({ examName: exam.examName });
    }
    async getExams() {
        return this.examModel.find({}, {});
    }
    async getQuestions() {
        return this.questionModel.find({}, {});
    }
    async getQuestionsByExam(examId) {
        const result = await this.questionModel.find({ examId: examId }).count();
        return result;
    }
    async getQuestionByExam(examId, questionNo) {
        const result = await this.questionModel.findOne({ examId: examId }).skip(questionNo - 1);
        return result;
    }
    async createQuestion(question) {
        return this.questionModel.create(question);
    }
    async addResult(userResult) {
        const result = await this.resultModel.create(userResult);
        return null;
    }
    async getUserResults(userId) {
        const result = await this.resultModel.aggregate([{ $match: { userId: userId } }, { $group: { _id: "$examId", maxScore: { $max: "$score" }, attempts: { $sum: 1 } } }]);
        console.log(result);
        return result;
    }
};
ExamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('exam')),
    __param(1, (0, mongoose_1.InjectModel)('question')),
    __param(2, (0, mongoose_1.InjectModel)('result')),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model, mongoose_2.Model])
], ExamService);
exports.ExamService = ExamService;
//# sourceMappingURL=exam.service.js.map