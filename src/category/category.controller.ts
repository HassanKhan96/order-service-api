import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll(@Query('storeId') storeId?: string) {
   return this.categoryService.findAll(storeId);
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() category: CreateCategoryDto) {
    return this.categoryService.update(id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
