import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { ref } from 'process';

@Schema()
export class item {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop({ref:"category"})
  categoryId: mongoose.Schema.Types.ObjectId;

  @Prop({ref:"store"})
  storeId: string;
}

export const itemSchema  =SchemaFactory.createForClass(item)

export const itemSchemaObject ={
    name:item.name,
    schema:itemSchema
}
 export type itemhydrateDocument = HydratedDocument <item>

export type itemModel =Model <item>