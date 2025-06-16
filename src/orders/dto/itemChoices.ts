import { IsNumber, IsString } from "class-validator";


export class itemChoices {
    @IsString()
    id:string

    @IsNumber()
    price:number

    @IsNumber()
    quantity:number
}