import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { CostumerDto } from './costumer.Dto';
import { Role } from '../enums/user.role';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsObject()
  costumer: CostumerDto;

  @IsEnum(Role)
  role: Role;
}
