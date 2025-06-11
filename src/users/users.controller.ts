import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Res,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response ,Request} from 'express';
import { AuthService } from 'src/auth/auth.service';
import { RefreshService } from 'src/auth/refresh.service';

@Controller('users')
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
  async login(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    try {
      let result = await this.usersService.login(body.email, body.password);
        
      res.cookie('refreshToken', result.refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });

      res.send({ accessToken: result.token });
    } catch (error) {
      console.log(error);
      res.status(401).send(error);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() User: CreateUserDto) {
    return this.usersService.update(id, User);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
  @Get('token')
  async refreshToken(@Req() req:Request, @Res() res: Response) {
    try {
      let refreshToken = req.cookies["refresh-token"]

      let isValidRT =await  this.RefreshService.verifyRefreshToken(refreshToken);
      
      if (!isValidRT) {
        return { message: 'refresh token not verified', };
      }

      let newAccessToken = this.AuthService.generateToken({
        id: isValidRT._id,
        email:isValidRT.email
      });

      res.status(200).send({ accesstoken: newAccessToken });
    } catch (error) {
      console.log(error);
      res.status(403).send({ message: 'Forbidden Access' });
      res.clearCookie('refresh-token');
    }
  }
}
