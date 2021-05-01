import { HttpModule, Module } from '@nestjs/common';
import { SecondaryController } from './secondary.controller';
import { SecondaryService } from './secondary.service';

@Module({
  imports: [HttpModule],
  controllers: [SecondaryController],
  providers: [SecondaryService],
})
export class SecondaryModule { }
