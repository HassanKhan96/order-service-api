import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  textColor: string;

  @Prop()
  backgroundColor: string;

  @Prop({ ref: 'store' })
  storeId: mongoose.Schema.Types.ObjectId;
}

export const categorySchema = SchemaFactory.createForClass(Category);

export const categorySchemaObject = {
  name: Category.name,
  schema: categorySchema,
};
export type categoryhydrateDocument = HydratedDocument<Category>;

export type CategoryModel = Model<Category>;
