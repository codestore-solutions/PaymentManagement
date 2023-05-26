import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query, UseGuards, UseInterceptors, UploadedFile, Put, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiExcludeEndpoint, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import moment from 'moment';
import { ErrorMessages } from 'src/assets/errorMessages';
import { OrderBodyDto, OrderDto } from './dto/customer.dto';
import { UpdateOrderDto, UpdateOrderStatusDto } from './dto/update.dto';
import { CustomerService } from './customer.service';
import { PaymentMode } from 'src/assets/constants';
import { uuid } from 'uuidv4';

// import { StripeService } from 'nestjs-stripe';


@ApiTags('Payment - customer')
@Controller('payment')
export class CustomerController {
    constructor(private readonly stripeService: StripeService) {}

    @Post('checkout')
    @ApiResponse({ status: 201, description: 'Creates a checkout session', type: CheckoutResponseDto })
    async createCheckoutSession(@Body() checkoutDto: CheckoutDto) {
        const session = await this.stripeService.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: checkoutDto.lineItems,
            success_url: checkoutDto.successUrl,
            cancel_url: checkoutDto.cancelUrl,
        });

        return { sessionId: session.id };
    }
}


