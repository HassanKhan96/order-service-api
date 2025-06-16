import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { OrderVariationSchema } from './orderVariation.schema';
import { orderItemSchema } from './orderItem';

@Schema()
export class OrderSchema {
  @Prop()
  userId: mongoose.Schema.Types.ObjectId;

  @Prop()
  storeId: mongoose.Schema.Types.ObjectId;

  @Prop()
  channel: string;

  @Prop()
  item:orderItemSchema

  @Prop()
  total: number;
}

export const orderSchema = SchemaFactory.createForClass(OrderSchema);

export const orderObject = {
  name: OrderSchema.name,
  schema: orderSchema,
};

export type Hyd = HydratedDocument<OrderSchema>;

export type OrderModel = Model<OrderSchema>;
