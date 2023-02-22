import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    console.log('hello controller');
    return 'get all cat api';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param) {
    // ParseIntPipe 활용하여 타입을 바꿔준다.
    // Int로 바뀌지 않을 경우, Validation에러 까지 잡아준다.
    // 이전 Pipe 값을 받아서, 이후 파이프를 테스트한다.
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
