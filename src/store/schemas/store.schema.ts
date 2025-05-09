
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { locationSchema } from './location.schema';

@Schema()
export class store {
  @Prop()
  name: String;

  @Prop()
  logo: String;
  
  @Prop()
  description: String;

  @Prop()
  minOrderPrice: Number;

  @Prop()
  deliveryMins: Number;

  @Prop()
  takeAwayMins: String;

  @Prop()
  location:locationSchema

  @Prop()
  enabled: boolean;
  
}
export const storeschema = SchemaFactory.createForClass(store)

export const StoreSchemaObject ={
    name:store.name,
    schema:storeschema
    
}

export type storeDocument = HydratedDocument <store>
export type storeModel =Model<store>