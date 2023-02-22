import { Controller, Get, Param, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';

// nestjs는 모듈 단위로 이루어진다. 모듈은 Controller, Service를 가진다.

// Controller : 클라이언트에서 요청을 받고, 응답을 하는 클래스
// 라우팅을 하기 위해서 arg path를 추가해주면 된다.
@Controller()
export class AppController {
  // Service 의존성 주입
  constructor(private readonly appService: AppService) {}

  // Req, Body, Param를 받는 방법
  @Get()
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    return this.appService.getHello();
  }
}
