import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondaryService {
  getName(): { message: string } {
    const { SECONDARY_NAME: name = 'World' } = process.env;
    return { message: name };
  }
}
