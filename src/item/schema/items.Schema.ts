import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class item {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  categoryId: string;

  @Prop()
  storeId: string;
}

export const itemSchema  =SchemaFactory.createForClass(item)

export const itemSchemaObject ={
    name:item.name,
    schema:itemSchema
}
 export type itemhydrateDocument = HydratedDocument <item>

export type itemModel =Model <item>