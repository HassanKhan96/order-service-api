import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './item/item.module';
import { CategoryModule } from './category/category.module';
import { VariationModule } from './variation/variation.module';
import { ChoicesModule } from './choices/choices.module';
import { UsersModule } from './users/users.module';
import { OrderModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    StoreModule,
    MongooseModule.forRoot('mongodb://localhost:27017/orderingWebsite'),
    ItemModule,
    CategoryModule,
    VariationModule,
    ChoicesModule,
    OrderModule,
    UsersModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
