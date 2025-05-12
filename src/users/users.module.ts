 import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { StoreModule } from 'src/store/store.module';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchemaObject } from './schema/users.schema';
import { passwordService } from './password.service';

@Module({
  imports:[MongooseModule.forFeature([usersSchemaObject])],
  controllers: [UsersController],
  providers: [UsersService,passwordService],
})
 export class UsersModule {}
