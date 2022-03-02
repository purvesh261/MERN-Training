import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student.service';
import { ClientModule } from './Clients/client.module';
@Module({
  imports: [ClientModule],
  // controllers: [AppController],
  // providers: [AppService, StudentService],
})

export class AppModule {}
