import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { city } from 'src/cities/schema/cities.schema';

@Schema()
export class locationSchema {
  @Prop()
  latitude: string;

  @Prop()
  longitude: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: city })
  city: string;
}
