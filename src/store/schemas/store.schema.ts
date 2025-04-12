
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class store {
  @Prop()
  name: String;

  @Prop()
  logo: String;
  
  @Prop()
  description: String;
  @Prop()
  minimumorderprice: Number;
  @Prop()
  deliverytime: Number;
  @Prop()
  location: String;
  @Prop()
  takeawayinmins: Number;
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