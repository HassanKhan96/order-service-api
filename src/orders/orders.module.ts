import { Module } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { OrderController } from "./orders.controller";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { orderObject } from "./Schema/OrderSchema";
@Module({
    imports:[MongooseModule.forFeature([orderObject])],
    providers:[OrderService],
    controllers:[OrderController]

})

export class OrderModule {}