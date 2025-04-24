import { Module } from '@nestjs/common';
import { VariationService } from './variation.service';
import { VariationController } from './variation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { variationSchemaObject } from './Schema/variation.Schema';

@Module({
  imports:[MongooseModule.forFeature([variationSchemaObject])],
  controllers: [VariationController],
  providers: [VariationService],
})
export class VariationModule {}
