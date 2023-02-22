import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP'); // nestjs에서 제공하는 로깅 방식

  use(req: Request, res: Response, next: NextFunction) {
    // res가 완료됐을 때 특정 응답을 로깅
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${req.originalUrl}`,
        res.statusCode,
      );
    });
    next();
  }
}
