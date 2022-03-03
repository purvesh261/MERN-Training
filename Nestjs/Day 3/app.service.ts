import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getName(): string {
    return 'Purvesh ';
  }

  getAge() : Number {
    return 22;
  }
}
