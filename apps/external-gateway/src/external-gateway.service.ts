import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
