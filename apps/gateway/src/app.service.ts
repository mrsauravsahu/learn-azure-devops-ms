import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    const { GATEWAY_NAME: name = 'World' } = process.env;
    return { message: `Hello ${name}!` };
  }
}
