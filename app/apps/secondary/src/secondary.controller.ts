import { Controller, Get, HttpService } from '@nestjs/common';
import { SecondaryService } from './secondary.service';

@Controller()
export class SecondaryController {
  constructor(
    private readonly secondaryService: SecondaryService,
    private readonly httpService: HttpService,
  ) { }

  @Get()
  getName(): { message: string } {
    return this.secondaryService.getName();
  }
}
