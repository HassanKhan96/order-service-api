import { IsArray, IsOptional, IsString } from "class-validator";


export class itemVariation {
    @IsString()
    id: string
     
    @IsOptional()
    @IsArray()
    varition:itemVariation
}