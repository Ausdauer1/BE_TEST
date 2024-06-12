import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/player/1')
  getObject(): object {
    return this.appService.getObject();
  }

  @Get('/player/2')
  getObject2(): object {
    return this.appService.getObject2();
  }
}
