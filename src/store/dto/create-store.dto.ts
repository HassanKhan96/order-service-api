import { IsBoolean, IsNumber, IsObject, isString, IsString } from 'class-validator';
import { LocationDto } from './location.dto';

export class CreateStoreDto {
  @IsString()
  name: string;

  @IsString()
  logo: string;

  @IsString()
  description: string;

  @IsNumber()
  minOrderPrice: number;

  @IsNumber()
  deliveryMins: number;

 @IsNumber()
  takeAwayMins: string;

  @IsObject()
  location: LocationDto;

  @IsBoolean()
  isEnabled: boolean;
}
