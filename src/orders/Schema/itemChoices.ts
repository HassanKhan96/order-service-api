import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class itemChoices {
     
       @Prop()
    choices: {
        id: string;
        price: number;
        quantity: number;
    }[]
}