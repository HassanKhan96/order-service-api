import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';

@Schema()
export class Variation {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ ref: 'item' })
  itemId: mongoose.Schema.Types.ObjectId;

  @Prop()
  IsOptional: boolean;

  @Prop()
  IsAvailable: string;
  
}
export const VariationSchema =SchemaFactory.createForClass(Variation)

export const variationSchemaObject={
    name:Variation.name,
    schema:VariationSchema
}
export type VariationSchemaDocument = HydratedDocument <Variation>

export type VariationModel =Model <Variation>