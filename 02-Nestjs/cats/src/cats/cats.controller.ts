import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    throw new HttpException('api broken', 401);
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param) {
    // ParseIntPipe 활용하여 타입을 바꿔준다.
    // Int로 바뀌지 않을 경우, Validation에러 까지 잡아준다.
    console.log('param', param);
    console.log(typeof param);
    return 'all cat';
  }

  @Post()
  createCat() {
    return 'all cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete partial cat';
  }
}
