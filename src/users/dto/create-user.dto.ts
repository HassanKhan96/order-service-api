import { IsObject, IsOptional, IsString } from "class-validator";
import { CostumerDto } from "./costumer.Dto";

export class CreateUserDto {
    @IsString()
    name:string;

    @IsString()
    email:string;

    @IsString()
    password:string;

    @IsOptional()
    @IsObject()
    costumer:CostumerDto
}


