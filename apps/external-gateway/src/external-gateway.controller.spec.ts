import { Test, TestingModule } from '@nestjs/testing';
import { ExternalGatewayController } from './external-gateway.controller';
import { ExternalGatewayService } from './external-gateway.service';

describe('ExternalGatewayController', () => {
  let externalGatewayController: ExternalGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExternalGatewayController],
      providers: [ExternalGatewayService],
    }).compile();

    externalGatewayController = app.get<ExternalGatewayController>(ExternalGatewayController);
  });

  describe('root', () => {
    it('should return "ExternalGatewayService says: Hello World!"', () => {
      expect(externalGatewayController.getHello()).toBe('ExternalGatewayService says: Hello World!');
    });
  });
});
