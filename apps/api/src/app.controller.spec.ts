import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RedisService } from './redis/redis.service';

describe('AppController', () => {
  let appController: AppController;

  const prismaMock = {
    $queryRaw: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
  };

  const redisMock = {
    ping: jest.fn().mockResolvedValue('PONG'),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
        {
          provide: RedisService,
          useValue: redisMock,
        },
      ],
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
    it('should return health status', async () => {
      await expect(appController.getHealth()).resolves.toMatchObject({
        status: 'ok',
        service: 'pml-cms-api',
        checks: {
          api: 'ok',
          database: 'ok',
          redis: 'ok',
        },
      });
    });
  });
});
