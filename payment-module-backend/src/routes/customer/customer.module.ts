import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { customerProviders } from './customer.provider';


@Module({
  imports: [],
  controllers: [ CustomerController ],
  providers: [
    CustomerService,
    ...customerProviders
  ],
})
export class CustomerModule {}
