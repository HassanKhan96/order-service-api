import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Choices {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop({ ref: 'variations' })
  variationId: mongoose.Schema.Types.ObjectId;

  @Prop()
  isAvailable:boolean
}
export const choicesSchema = SchemaFactory.createForClass(Choices);

export const choicesSchemaObject = {
  name: Choices.name,
  schema: choicesSchema,
};
export type hydrate = mongoose.HydratedDocument<Choices>;
export type chiocesModel = mongoose.Model<Choices>;
