import { IsNumber, IsOptional, IsString } from 'class-validator';

export class LocationDto {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsOptional()
  street: string;

  @IsOptional()
  nearBy: string;

  @IsString()
  city: string;
}
