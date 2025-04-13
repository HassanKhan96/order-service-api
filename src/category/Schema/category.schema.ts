import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  textcolor: string;

  @Prop()
  Backgroundcolor: string;

  @Prop()
  storeId: string;
}

export const categorySchema = SchemaFactory.createForClass(Category);

export const categorySchemaObject = {
  name: Category.name,
  schema: categorySchema,
};
export type categoryhydrateDocument = HydratedDocument<Category>;

export type categoryModel = Model<Category>;
