import { Prop, Schema } from "@nestjs/mongoose";
import { itemChoices } from "./itemChoices";


@Schema()
export class OrderVariationSchema  {
    @Prop()
    id: string;
     
    choices:itemChoices
 
}