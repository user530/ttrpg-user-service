import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPlaceholder() {
    return { id: 1, name: 'Bob Ross' };
  }
}
