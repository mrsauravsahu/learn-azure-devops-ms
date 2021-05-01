import { HttpService, Injectable } from '@nestjs/common';
import { Info } from 'common/types';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  async getSecondaryInfo() {
    const { GATEWAY_SECONDARY_URL: secondaryUrl } = process.env;

    const response = await this.httpService.get(secondaryUrl).toPromise();

    return {
      message: response.data.message,
      length: response.data.message.length,
    };
  }
  getInfo(): Promise<Info> {
    const { GATEWAY_NAME: name } = process.env;
    return Promise.resolve({
      message: name,
      length: name.length,
    });
  }
}
