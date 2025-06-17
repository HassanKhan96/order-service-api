import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { StoreModule } from 'src/store/store.module';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchemaObject } from './schema/users.schema';
import { passwordService } from './password.service';
import { EmailModule } from 'src/email/email.module';
import { AuthModule } from 'src/auth/auth.module';
import { RefreshModule } from 'src/auth/refresh.module';

@Module({
  imports: [
    MongooseModule.forFeature([usersSchemaObject]),
    EmailModule,
    AuthModule,
    RefreshModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, passwordService],
})
export class UsersModule {}
