import { IsBoolean, IsMongoId, IsString } from "class-validator";

export class CreateVariationDto {


@IsBoolean()
IsAvailable:boolean

@IsMongoId()
@IsString()
itemId:string

@IsBoolean()
IsOptional:boolean

@IsString()
name:string

@IsString()
description:string
}
