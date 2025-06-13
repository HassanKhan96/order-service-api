import { Injectable, Param, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { store, storeModel, } from './schemas/store.schema';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoreService {
  constructor(@InjectModel(store.name) private readonly storeModel:storeModel){}
  async create(store: CreateStoreDto) {
    try {
      const newRestaurent =await new this.storeModel(store).save()
      if(!newRestaurent){
        return {message:"server error"}
      }
      return {message:"restaurent created"}
    } catch (error) {
      console.log(error)
    }
  }
  async restaurentList(@Query() city:string ){
    try {
      const getallrestaurents=await this.storeModel.aggregate([
      {
        $project:{
          name:1,
          logo:1,
          description:1,
          takeAwayMins:1,
          minOrderPrize:1,
          deliveryMins:1,
          isEnabled:1,
          location:{
            $filter:{
              input:"$city",
              as:"city",
              cond:{$eq:["city",city]}

             
            }
          }
          

        }
      }
      ])
      if(!getallrestaurents){
        return {message:"nothing found"}
      }
      return getallrestaurents
    } catch (error) {
      console.log(error)
    }
  }
  async updateRestaurent(store: CreateStoreDto,@Param("id") id:string){
      try {
        const update =await this.storeModel.findByIdAndUpdate(id,store)
        if(!update){
          return{message:"restaurent cannot be updated"}
        }
        return {message: "restaurent updated",update}
        
      } catch (error) {
        console.log(error)
      }
  }
  async deleteRestaurent (@Param("id") id:string ){
     try {
      const deleteRestaurent =this.storeModel.findByIdAndDelete(id)
      if(!deleteRestaurent){
        return{message:"retaurent can not be deleted"}
      }
     } catch (error) {
      console.log(error)
     }
  }

}
