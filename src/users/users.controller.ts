import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Otp } from '@getbrevo/brevo';

@Controller ('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly AuthService :AuthService,
    private readonly RefreshService:RefreshService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() email: string, passsword: string) {
    return this.usersService.login(email, passsword);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() User: CreateUserDto) {
    return this.usersService.update(id, User);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Post('/verify_otp')
  verify(@Body() Otp:string, user_id:string){
    return this.usersService.verify(Otp , user_id)
  }



}


