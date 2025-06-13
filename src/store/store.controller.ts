import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Query } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { AuthGuard } from 'src/auth/AuthGuard';

@Controller('store')
@UseGuards(AuthGuard)
export class StoreController {
  constructor(private readonly storeService: StoreService) {}
       
  @Get("/GET")
  getall(@Query() city:string){
    return this.storeService.restaurentList(city)
  }
  @Post("/add")
  newUser(@Body() body:CreateStoreDto){
    return this.storeService.create(body)

  }
  @Put("/update/:id")
  update(@Body() body:CreateStoreDto,@Param("id") id:string){
     return this.storeService.updateRestaurent(body,id)
  }
  @Delete("/delete/:id")
  delete(@Param("id") id:string ){
       return this.storeService.deleteRestaurent(id)
  }
 
}
