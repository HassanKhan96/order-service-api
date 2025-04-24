import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchemaObject } from './schemas/store.schema';

@Module({
  imports:[MongooseModule.forFeature([StoreSchemaObject])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
