import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Exam {
    @Prop()
    examName: string;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);