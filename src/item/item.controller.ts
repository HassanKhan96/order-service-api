import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { AuthGuard } from 'src/auth/AuthGuard';

@Controller('item')
@UseGuards(AuthGuard)
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post('/create-item')
  create(@Body() item: CreateItemDto) {
    return this.itemService.create(item);
  }

  @Get('/')
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.itemService.findById(id);
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
