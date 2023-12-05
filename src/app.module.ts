import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
<<<<<<< HEAD

@Module({
  imports: [],
=======
=======
import { OrdersModule } from './orders/orders.module';
>>>>>>> 8f44704dcedd6d95173bfdd0e556b1d281fff41b
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
<<<<<<< HEAD
  imports: [UsersModule],
>>>>>>> 0c8699b56261c5d222b5301bd83e9c0444c986bf
=======
  imports: [OrdersModule, UsersModule, ProductsModule],
>>>>>>> 8f44704dcedd6d95173bfdd0e556b1d281fff41b
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
