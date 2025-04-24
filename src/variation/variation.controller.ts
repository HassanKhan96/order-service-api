import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { VariationService } from './variation.service';
import { CreateVariationDto } from './dto/create-variation.dto';
import { UpdateVariationDto } from './dto/update-variation.dto';

@Controller('variation')
export class VariationController {
  constructor(private readonly variationService: VariationService) {}

  @Post()
  create(@Body() createVariationDto: CreateVariationDto) {
    return this.variationService.create(createVariationDto);
  }

  @Get()
  findAll(@Query("itemId") itemId:string) {
    return this.variationService.findall(itemId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVariationDto: CreateVariationDto) {
    return this.variationService.update(id, updateVariationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variationService.remove(id);
  }
}
