import { isString, IsString } from "class-validator";

export class CreateItemDto {

    @IsString()
    name:string;

    @IsString()
    description:string;

    @IsString()
    image:string

    @IsString()
    categoryId:string

    @IsString()
    storeId:string

}
