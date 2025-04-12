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
  async restaurentList(){
    try {
      const getallrestaurents=this.storeModel.find()
      if(!getallrestaurents){
        return {message:"nothing found"}
      }
      return getallrestaurents
    } catch (error) {
      console.log(error)
    }
  }
  async updateRestaurent(store: {
    name: string;
    logo: string;
    description: string;
    Minorder: number;
    takeawymins: number;
    deliverytime: number;
    location: string;
    enable: boolean;},@Param("id") id:string){
      try {
        const update =await this.storeModel.findByIdAndUpdate(id,store)
        if(!update){
          return{message:"restaurent cannot be updated"}
        }
        
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
