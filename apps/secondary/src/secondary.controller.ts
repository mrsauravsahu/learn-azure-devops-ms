import { Controller, Get, HttpService } from '@nestjs/common';
import { SecondaryService } from './secondary.service';
import { Info } from './types';

@Controller()
export class SecondaryController {
  constructor(
    private readonly secondaryService: SecondaryService,
    private readonly httpService: HttpService,
  ) { }

  @Get()
  async getHello(): Promise<Info> {
    const { SECONDARY_GATEWAY_URL: appUrl } = process.env;

    const response = await this.httpService.get(appUrl).toPromise();

    return {
      message: response.data.message,
      length: response.data.message.length,
    };
  }
}
