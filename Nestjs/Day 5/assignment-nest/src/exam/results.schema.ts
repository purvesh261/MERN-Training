import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Result {
    @Prop()
    userId: string;

    @Prop()
    examId: string;

    @Prop()
    score: number;

    @Prop({ type: Object})
    answers: {};
}

export const ResultSchema = SchemaFactory.createForClass(Result);