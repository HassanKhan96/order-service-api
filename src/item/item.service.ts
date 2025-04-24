import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { item, itemModel } from './schema/items.Schema';
import mongoose from 'mongoose';

@Injectable()
export class ItemService {
  constructor(@InjectModel(item.name) private readonly itemmodel: itemModel) {}
  async create(item: CreateItemDto) {
    const newitem = await new this.itemmodel(item).save();
    if (!newitem) {
      return InternalServerErrorException;
    }
    return { message: 'new item created' };
  }

  async findAll() {
    const allitems = await this.itemmodel.aggregate([
      {
        $lookup: {
          from: 'variations',
          localField: '_id',
          foreignField: 'itemId',
          as: 'variations',
        },
      },
    ]);
    if (!allitems) {
      return NotFoundException;
    }
    return allitems;
  }

  async findById(id: string) {
    
    const item = await this.itemmodel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: 'variations',
          localField: '_id',
          foreignField: 'itemId',
          as: 'variations',
        },
      },
    ]);

    if (!item.length) throw new NotFoundException('Item not found');

    return item;
  }

  async update(id: string, item: CreateItemDto) {
    const updateItems = await this.itemmodel.findByIdAndUpdate(id, item);
    if (!updateItems) {
      return InternalServerErrorException;
    }
    return { message: 'item updated', updateItems };
  }

  async remove(id: string) {
    const deletitem = await this.itemmodel.findByIdAndDelete(id);
    if (!deletitem) {
      return InternalServerErrorException;
    }
    return { message: 'item deleted', deletitem };
  }
}
