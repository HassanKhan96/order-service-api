import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class city {
  @Prop()
  name: string;

  @Prop()
  country: string;

  @Prop()
  postalCode: number;
}

export const citiesSchema = SchemaFactory.createForClass(city)

export const citiesSchemaObject = {
    name:city.name,
    schema:citiesSchema,

};

export type citiesDocument = HydratedDocument<city>;
export type citiesModel = Model<city>;
