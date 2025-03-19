import { NestFactory } from '@nestjs/core';
import { ExternalGatewayModule } from './external-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ExternalGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
