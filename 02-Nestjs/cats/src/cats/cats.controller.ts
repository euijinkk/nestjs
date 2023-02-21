import {
  Controller,
  Delete,
  Get,
  HttpException,
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
  getOneCat() {
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
