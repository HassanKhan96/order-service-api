import { IsMongoId, isString, IsString } from 'class-validator';

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

  
}
