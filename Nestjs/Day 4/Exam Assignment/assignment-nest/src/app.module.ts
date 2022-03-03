import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamModule } from './exam/exam.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [LoginModule, ExamModule, MongooseModule.forRoot('mongodb://localhost:27017/testDB')],
})

export class AppModule {}
