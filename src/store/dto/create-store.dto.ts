import { IsBoolean, IsNumber, IsObject, isString, IsString } from 'class-validator';
import { LocationDto } from './location.dto';

export class CreateStoreDto {
  @IsString()
  name: string;

  @IsString()
  logo: string;

  @IsString()
  description: string;

  @IsString()
  minOrderPrice: number;

  @IsString()
  deliveryMins: number;

 @IsString()
  takeAwayMins: string;

  @IsObject()
  location: LocationDto;

  @IsBoolean()
  isEnabled: boolean;
}
