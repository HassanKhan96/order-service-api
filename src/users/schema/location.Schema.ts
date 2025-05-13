import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class location {
    @Prop()
    altitude:string

    @Prop()
    latitude:string

    @Prop()
    nearbyDestination:string
}