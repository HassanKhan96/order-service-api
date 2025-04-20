import { IsNumber, IsString } from "class-validator";

export class CreateChoiceDto {
    @IsString()
    nmae:string

    @IsString()
    description:string

    @IsNumber()
    price:number
}
