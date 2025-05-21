import { IsString } from "class-validator";

export class AddressDto {
    @IsString()
    altitude:string

    @IsString()
    latitude:string
}