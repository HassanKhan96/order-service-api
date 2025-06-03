import { IsArray, IsString } from "class-validator";
import { itemChoices } from "./itemChoices";


export class itemVariation {
    @IsString()
    id:string
     
    @IsArray()
    coices:itemChoices
}