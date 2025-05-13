import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'JWT_SECRET',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
