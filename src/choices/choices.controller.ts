import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChoicesService } from './choices.service';
import { CreateChoiceDto } from './dto/create-choice.dto';
import { UpdateChoiceDto } from './dto/update-choice.dto';

@Controller('choices')
export class ChoicesController {
  constructor(private readonly choicesService: ChoicesService) {}

  @Post()
  create(@Body() createChoiceDto: CreateChoiceDto) {
    return this.choicesService.create(createChoiceDto);
  }

  @Get()
  findAll() {
    return this.choicesService.findAll();
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() Choices: CreateChoiceDto) {
    return this.choicesService.update(id, Choices);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.choicesService.remove(+id);
  }
}
