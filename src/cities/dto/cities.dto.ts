import { IsNumber, IsString } from "class-validator";


export class citiesDto{

    @IsString()
    name:string;

    @IsString()
    country:string;

    @IsNumber()
    postsalCode:number;

}