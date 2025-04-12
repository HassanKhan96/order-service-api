import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}
       
  @Get("/")
  getall(){
    return this.storeService.restaurentList()
  }
  @Post("/add")
  newUser(@Body() body:CreateStoreDto){
    return this.storeService.create(body)

  }
  @Put("/update")
  update(@Body() body:any,@Param("id") id:string){
     return this.storeService.updateRestaurent(body,id)
  }
  @Delete("/delete")
  delete(@Param("id") id:string ){
       return this.storeService.deleteRestaurent(id)
  }
 
}
