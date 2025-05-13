import { IsArray, IsObject, IsString } from "class-validator";
import {AddressDto} from './address.Dto'
export class CostumerDto {
  @IsArray()
  @IsString()
 OrderList: string;

 @IsObject()
 address:AddressDto


}