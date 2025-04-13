import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { itemSchemaObject } from './schema/items.Schema';

@Module({
  imports:[MongooseModule.forFeature([itemSchemaObject])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
