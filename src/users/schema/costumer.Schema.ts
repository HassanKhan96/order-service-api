import { Prop, Schema } from "@nestjs/mongoose";
import { location } from "./location.Schema";


@Schema()
export class Costumer {
    @Prop()
    OrderList:string[]

    @Prop()
     address:location
}