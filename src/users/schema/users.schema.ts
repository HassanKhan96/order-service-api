import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";
import { Costumer } from "./costumer.Schema";


@Schema()
export class users{
    @Prop()
    name:string;

    @Prop()
    email:string;

    @Prop()
    password:string;
     
    @Prop()
    costumerData:Costumer

    
}

export const usersSchema = SchemaFactory.createForClass(users)

export const usersSchemaObject ={
    name:users.name,
    schema:usersSchema
}

export type usersDocument = HydratedDocument<users>
export type usersModel = Model<users>