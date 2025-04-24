import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchemaObject } from './Schema/category.schema';

@Module({
  imports:[MongooseModule.forFeature([categorySchemaObject])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
