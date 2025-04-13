import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post("/registeritem")
  create(@Body() item: CreateItemDto) {
    return this.itemService.create(item);
  }

  @Get("/")
  findAll() {
    return this.itemService.findAll();
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() item: CreateItemDto) {
    return this.itemService.update(id, item);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(id);
  }
}
