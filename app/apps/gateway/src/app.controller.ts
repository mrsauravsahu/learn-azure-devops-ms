import { Controller, Get } from '@nestjs/common';
import { Info } from 'common/types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('secondary')
  async getSecondaryName(): Promise<Info> {
    const secondaryInfo = this.appService.getSecondaryInfo();
    return secondaryInfo;
  }

  @Get()
  async getInfo(): Promise<Info> {
    const info = this.appService.getInfo();
    return info;
  }
}
