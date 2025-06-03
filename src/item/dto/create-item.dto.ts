import {
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsObject,
  isString,
  IsString,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsMongoId()
  @IsString()
  categoryId: string;

  @IsMongoId()
  @IsString()
  storeId: string;

  @IsBoolean()
  isAvailable: string;

  @IsNumber()
  position: number;

  @IsObject()
  price: {
    DELIVERY: number;
    TAKE_AWAY: number;
  };
}
