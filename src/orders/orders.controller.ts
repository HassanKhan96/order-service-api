import { Controller, Post, UseGuards } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder';
import { OrderService } from './orders.service';
import { threadId } from 'worker_threads';
import { AuthGuard } from 'src/auth/AuthGuard';

@Controller('order')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}
  @Post()
  create(Order: CreateOrderDto) {
    return this.OrderService.create(Order);
  }
}
