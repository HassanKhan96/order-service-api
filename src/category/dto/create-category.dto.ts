import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  description:string;

  @IsString()
  image:string;

  @IsString()
  textcolor:string

  @IsString()
  BAckgroundcolor:string

  @IsString()
  storeId:string
}
