import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class cities {
  @Prop()
  name: string;

  @Prop()
  country: string;

  @Prop()
  postalCode: number;
}

export const citiesSchema = SchemaFactory.createForClass(cities)

export const citiesSchemaObject = {
    name:cities.name,
    schema:citiesSchema,

};

export type citiesDocument = HydratedDocument<cities>;
export type citiesModel = Model<cities>;
