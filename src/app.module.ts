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
<<<<<<< HEAD
import { EmailModule } from './email/email.module';
=======
import { OrderModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { RefreshModule } from './auth/refresh.module';

>>>>>>> 573804301ea470cf49f63caeb0208b94d862ad45

@Module({
  imports: [
    StoreModule,
    MongooseModule.forRoot('mongodb://localhost:27017/orderingWebsite'),
    ItemModule,
    CategoryModule,
    VariationModule,
    ChoicesModule,
<<<<<<< HEAD
    UsersModule,
=======
    OrderModule,
    UsersModule,
    AuthModule,
    RefreshModule
    
>>>>>>> 573804301ea470cf49f63caeb0208b94d862ad45
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
