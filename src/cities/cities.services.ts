import { Injectable, Param } from '@nestjs/common';
import { citiesModel } from './schema/cities.schema';
import { citiesDto } from './dto/cities.dto';

@Injectable()
export class citiesServices {
  constructor(private readonly cities: citiesModel) {}

  async create(city: citiesDto) {
    const addcity = await new this.cities(city).save();
    if (!city) {
      return { message: 'city not available' };
    }
    return { message: 'city added' };
  }

  async deleteCity(city:citiesDto , @Param("id") id:string){
  const deleteCity = await  this.cities.findByIdAndDelete(id);

    if(!deleteCity){
        return {message:'city can not be deleted'};
    }
    return {message:'city deleted'}
}

    async updateCity(city:citiesDto,@Param("id") id:string){
        try{
            const update = await this.cities.findByIdAndUpdate(id)
            if(!update){
                return {message:"city cannot be updated"}
            }
            return{message:"city updated"}

        }catch(error){
            console.log(error)
        }
    }


}
