import { IsArray, IsMongoId, IsNumber, IsObject, IsString } from "class-validator";


export class CreateOrderDto {

    @IsString()
    @IsMongoId()
    storeId:string

    @IsString()
    @IsMongoId()
    userId:string

    @IsString()
    channel:string

    @IsArray()
    @IsObject()
    

    @IsNumber()
    total:number

}