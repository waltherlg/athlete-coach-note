import { Controller, Get } from '@nestjs/common';
import { ExternalGatewayService } from './external-gateway.service';

@Controller()
export class ExternalGatewayController {
  constructor(private readonly externalGatewayService: ExternalGatewayService) {}

  @Get()
  getHello(): string {
    return this.externalGatewayService.getHello();
  }
}
