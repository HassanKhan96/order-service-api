import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { citiesServices } from './cities.services';
import { citiesDto } from './dto/cities.dto';
import { updateCityDto } from './dto/updarecities.dto'; 
@Controller('cities')
export class citiesController {
  constructor(private readonly citiesServices: citiesServices) {}

  @Post('/create-cities')
  create(@Body() cities: citiesDto) {
    return this.citiesServices.create(cities);
  }

  @Get('/')
  getCities() {
    return this.citiesServices.get();
  }

    @Put('update/:id')
      update(@Param('id')  id:string ,city:updateCityDto) {
      return this.citiesServices.updateCity(id,city)
      }

  @Delete('delete/:id')
  deleteCity(@Param('id') id: string) {
    return this.citiesServices.remove(id); 
  }
}
