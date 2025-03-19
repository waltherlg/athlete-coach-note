import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalGatewayService {
  getHello(): string {
    return 'ExternalGatewayService says: Hello World!';
  }
}
