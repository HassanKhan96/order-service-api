import {
  Controller,
  ForbiddenException,
  Get,
  InternalServerErrorException,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { RefreshService } from './refresh.service';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { IsEmail } from 'class-validator';

@Controller('refresh')
export class RefreshAuthController {
  constructor(
    private readonly refreshAuthService: RefreshService,
    private readonly authService: AuthService,
  ) {}

  @Get('/')
  refreshToken(@Req() req: Request, @Res() res: Response) {
    try {
      let refreshToken = req.cookies['refresh-token'];

      let isValidRT = this.refreshAuthService.verifyRefreshToken(refreshToken);

      let newAccessToken = this.authService.generateToken({
         id:isValidRT
      });

      res.status(200).send({ accessToken: newAccessToken });
    } catch (error) {
      console.log(error);
      res.status(403).send({ message: 'Forbidden Access' });
      res.clearCookie('refresh-token');
    }
  }
}
