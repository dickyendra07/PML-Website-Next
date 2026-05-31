import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('api info', () => {
    it('should return API info', () => {
      expect(appController.getApiInfo()).toMatchObject({
        name: 'Pharma Metric Labs API',
        service: 'pml-cms-api',
        status: 'running',
      });
    });
  });

  describe('health', () => {
    it('should return health status', () => {
      expect(appController.getHealth()).toMatchObject({
        status: 'ok',
        service: 'pml-cms-api',
      });
    });
  });
});
