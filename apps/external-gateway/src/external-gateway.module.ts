import { Module } from '@nestjs/common';
import { ExternalGatewayController } from './external-gateway.controller';
import { ExternalGatewayService } from './external-gateway.service';

@Module({
  imports: [],
  controllers: [ExternalGatewayController],
  providers: [ExternalGatewayService],
})
export class ExternalGatewayModule {}
