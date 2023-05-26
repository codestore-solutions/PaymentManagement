import { ApiProperty } from '@nestjs/swagger';
import { PaymentIntent, Customer, EphemeralKey } from 'stripe';

export class CheckoutResponseDto {
  @ApiProperty()
  paymentIntent: PaymentIntent;

  @ApiProperty()
  ephemeralKey: EphemeralKey;

  @ApiProperty()
  customer: Customer;

  @ApiProperty()
  publishableKey: string;
}


// export class CheckoutResponseDto {
//     sessionId: string;
// }

