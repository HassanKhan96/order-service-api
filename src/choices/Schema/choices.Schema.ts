import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";


@Schema()
export class Choices{
    @Prop()
    name:string

    @Prop()
    description:string

    @Prop()
    price:number
}
export const choicesSchema =SchemaFactory.createForClass(Choices)

export const choicesSchemaObject ={
    name:Choices.name,
    schema:choicesSchema
}
export type hydrate=HydratedDocument <Choices>
export type chiocesModel =Model <Choices>
