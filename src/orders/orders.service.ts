import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderModel, OrderSchema, orderSchema } from './Schema/OrderSchema';
import { CreateOrderDto } from './dto/createOrder';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(OrderSchema.name) private readonly orderModel: OrderModel,
  ) {}

  async create(order: CreateOrderDto) {
    try {
      let addOrder = await new this.orderModel(order).save();
      if (!addOrder) return { message: 'this order  can not be placed' };
      return { message: 'order created' };
    } catch (error) {
      console.log(error);
    }
  }
  async showOrder(){
    

  }
}
