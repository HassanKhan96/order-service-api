import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Otp } from '@getbrevo/brevo';
import { AuthService } from 'src/auth/auth.service';
import { RefreshService } from 'src/auth/refresh.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly AuthService: AuthService,
    private readonly RefreshService: RefreshService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() body:{email:string,password:string}) {
    return this.usersService.login(body.email,body.password);
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
  verify(@Body() Otp: string, user_id: string) {
    return this.usersService.verify(Otp, user_id);
  }
  @Get("/refresh")
  async getAccestoken(@Req() req:Request, @Res() res:Response){
   const refreshToken =req.cookies["Refresh-token"]
    try {
      
      let isValidUser = await this.RefreshService.verifyRefreshToken(refreshToken)

      let newAccesToken = this.AuthService.generateToken({id:isValidUser._id,email:isValidUser.email})
       
      res.status(200).send({accestoken:newAccesToken})
    } catch (error) {
      
    }
   
  }
}
