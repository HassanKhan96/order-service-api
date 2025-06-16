import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RefreshService } from './refresh.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'AYAN_SECRET',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [],
  providers: [RefreshService],
  exports: [RefreshService],
})
export class RefreshModule {}
