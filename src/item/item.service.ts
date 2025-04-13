import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { item, itemModel } from './schema/items.Schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel(item.name) private readonly itemmodel: itemModel) {}
  async create(item: CreateItemDto) {
    const newitem = await new this.itemmodel(item).save();
    if (!newitem) {
      return { message: 'new item cnnot be created' };
    }
    return { message: 'new item created' };
  }

  async findAll() {
    const allitems = await this.itemmodel.find();
    if (!allitems) {
      return {
        message: 'cannot get products',
      };
    }
    return allitems;
  }


  async update(id: string, item:CreateItemDto) {
     const updateItems =await this.itemmodel.findByIdAndUpdate(id,item)
     if(!updateItems){
      return{message:"items cannot be updated"}
     }
     return {message:"item updated",updateItems}
  }

 async  remove(id: string) {
    const deletitem =await this.itemmodel.findByIdAndDelete(id)
    if(!deletitem){
      return {message:"this item csnnot be deleted"}
    }
    return {message:"item deleted",deletitem};
  }
}
