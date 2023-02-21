import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)

// 123
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | string
      | { message: string | string[] };

    if (typeof error === 'string') {
      response.status(status).json({
        statusCode: status,
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
      });
    } else {
      response.status(status).json({
        statusCode: status,
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        ...error,
      });
    }
  }
}
