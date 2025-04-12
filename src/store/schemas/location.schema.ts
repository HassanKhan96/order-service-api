import { Prop, Schema } from "@nestjs/mongoose";



@Schema()
export class locationSchema {
    
    @Prop()
    latitude:string;

    @Prop()
    longitude: number;

    @Prop()
    city: string;
}



