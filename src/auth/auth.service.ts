import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { promises } from 'dns';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    return await this.jwtService.verify(token);
  }
}
