import {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Question {
    @Prop()
    examId: string;

    @Prop()
    question: string;

    @Prop()
    options: [];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);