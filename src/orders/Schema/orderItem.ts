import { Prop, Schema } from "@nestjs/mongoose";
import { OrderVariationSchema } from "./orderVariation.schema";


@Schema()
export class orderItemSchema{
    @Prop()
    id:string

    @Prop()
    variation:OrderVariationSchema
}