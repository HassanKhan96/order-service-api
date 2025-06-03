import { Prop } from '@nestjs/mongoose';

export class PriceSchema {
  @Prop()
  TAKE_AWAY: number;

  @Prop()
  DELIVERY: number;
}
