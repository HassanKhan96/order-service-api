import { Injectable, Param } from '@nestjs/common';
import { citiesModel, city } from './schema/cities.schema';
import { citiesDto } from './dto/cities.dto';
import { updateCityDto } from './dto/updarecities.dto';

@Injectable()
export class citiesServices {
  constructor(private readonly cities: citiesModel) {}

  async create(city: citiesDto) {
    const addcity = await new this.cities(city).save();
    if (!addcity) {
      return { message: 'city not available' };
    }
    return { message: 'city added' };
  }

  async get(){
    const getCities = await this.cities.find(city)
    if(!getCities){
        return{message:'city cannot be found'}
    }
    return{message:'city found'}
  }

  async deleteCity(id: string) {
    const deleteCity = await this.cities.findByIdAndDelete(id);

    if (!deleteCity) {
      return { message: 'city can not be deleted' };
    }
    return { message: 'city deleted' };
  }

  async updateCity (city:updateCityDto,id:string){
    const update = await this.cities.findByIdAndUpdate(id,city)
    if(update){
      return {message:"cannot run the update "}
    }
    return {message:"city updated"}
  }

  async  remove(id:string){
  const remove = await this.cities.findByIdAndDelete(id)
  if(!remove){
    return {message:"could not delete"}
  }
  return {message:"city deleted"}
  }
}
